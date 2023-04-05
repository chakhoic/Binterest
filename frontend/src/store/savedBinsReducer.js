import csrfFetch from "./csrf";

// Add the constants
const SET_SAVED_BINS = "savedBins/SET_SAVED_BINS";
const SAVE_BIN = "savedBins/SAVE_BIN";
const REMOVE_BIN = "savedBins/REMOVE_BIN";
const RECEIVE_SAVES = "savedBins/RECEIVE_SAVES";

// Add the action creator for setting saved bins
export const setSavedBins = (bins) => {
  return {
    type: SET_SAVED_BINS,
    payload: bins,
  };
};

export const receiveSaves = (saves) => {
  return {
    type: RECEIVE_SAVES,
    payload: saves,
  };
};

export const fetchSavedBins = () => async (dispatch) => {
  const response = await fetch("/api/saves");
  if (response.ok) {
    const savedBins = await response.json();
    dispatch(receiveSaves(savedBins));
  } else {
    console.error("Error fetching saved bins");
  }
};


export const createSave = (save) => async (dispatch) => {
  const response = await csrfFetch("/api/saves", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(save),
  });

  if (response.ok) {
    dispatch({
      type: SAVE_BIN,
      payload: { binId: save.bin_id },
    });
  } else if (response.status === 422) {
    console.error("Error: Duplicate save");
  }
};


const initialState = {
  savedBins: [],
};

export default function savedBinsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SAVES:
      return {
        ...state,
        savedBins: action.payload.map((save) => save.bin_id),
      };
    case SET_SAVED_BINS:
      return {
        ...state,
        savedBins: action.payload,
      };
    case SAVE_BIN:
      return {
        savedBins: [...state.savedBins, action.payload.binId],
      };
    case REMOVE_BIN:
      return {
        savedBins: state.savedBins.filter((id) => id !== action.payload.binId),
      };
    default:
      return state;
  }
}
