import csrfFetch from "./csrf"
  export const createSave = (save) => async dispatch => {
    const response = await csrfFetch('/api/saves', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(save)
    })
    return response
    // csrfAPIFetch('/api/saves', {
    //   method: "POST",
    //   data: { save }
    // })
  }
  

const initialState = {
    savedBins: []
  }
  
  export default function savedBinsReducer(state = initialState, action) {
    switch (action.type) {
      case "SAVE_BIN":
        return {
          savedBins: [...state.savedBins, action.payload.binId]
        }
      case "REMOVE_BIN":
        return {
          savedBins: state.savedBins.filter(id => id !== action.payload.binId)
        }
      default:
        return state;
    }
  }
  