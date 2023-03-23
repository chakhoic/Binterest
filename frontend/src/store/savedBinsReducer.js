
 export const saveBin = (binId) => {
    return {
      type: "SAVE_BIN",
      payload: {
        binId
      }
    }
  }
  
 export const removeBin = (binId) => {
    return {
      type: "REMOVE_BIN",
      payload: {
        binId
      }
    }
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
  