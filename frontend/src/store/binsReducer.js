import { csrfFetch } from "./csrf";

// ACTION TYPES
export const RECEIVE_BIN = 'bins/RECEIVE_BIN';
export const REMOVE_BIN = 'bins/REMOVE_BIN';
export const RECEIVE_BINS = 'bins/RECEIVE_BINS';
// export const ADD_BIN = 'bins/ADD_BIN'



// ACTION CREATORS
export const receiveBin = bin => ({
    type: RECEIVE_BIN,
    bin
});

export const receiveBins = bins => ({
    type: RECEIVE_BINS,
    bins
});

export const removeBin = binId => ({
    type: REMOVE_BIN,
    binId
});

// export const addBin = binObj => {
//     return {
//         type: ADD_BIN,
//         binObj
//     }
// }

// THUNK ACTIONS
export const fetchBins = () => async (dispatch) => {
    const res = await fetch('/api/bins');

    if (res.ok) {
        const bins = await res.json();
        dispatch(receiveBins(bins));
    }
}

export const fetchBin = (binId) => async (dispatch) => {
    const res = await fetch(`/api/bins/${binId}`);

    if (res.ok) {
        const bin = await res.json();
        dispatch(receiveBin(bin));
    }
}

export const createBin = (binObj) => async (dispatch) => {
    const res = await fetch(`/api/bins`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(binObj)
    });

    if (res.ok) {
        const bin = await res.json();
        dispatch(receiveBin(bin));
    }
}

export const deleteBin = binId => async dispatch => {

    const res = await csrfFetch(`/api/bins/${binId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (res.ok) {
        dispatch(removeBin(binId));
    }
}

export const updateBin = bin => async (dispatch) => {
    const res = await csrfFetch(`/api/bins/${bin.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bin)
    });

    if (res.ok) {
        const bin = await res.json();
        dispatch(receiveBin(bin));
    }
}

// SELECTORS
export const getBin = binId => state => {
    return state?.bins ? state.bins[binId] : null;
}

export const getBins = state => {
    return state?.bins ? Object.values(state.bins) : [];
} 

// REDUCER
const binsReducer = (state = {}, action) => {

    const newState = { ...state }

    switch (action.type) {
        // case RECEIVE_BINS:
        //     return { ...state, ...action.bins };
        case RECEIVE_BINS:
            // return { ...state, ...Object.fromEntries(Object.entries(action.bins).map(([k, v]) => [k, {...v}])), allBins: Object.values(action.bins) };
            return { ...state, ...action.bins};
        case RECEIVE_BIN:
            newState[action.bin.id] = action.bin
            return newState
        case REMOVE_BIN:
            delete newState[action.binId];
            return newState;
        default:
            return state;
    }
}

export default binsReducer