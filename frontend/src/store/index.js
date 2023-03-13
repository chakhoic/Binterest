import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import session from './session';
import thunk from "redux-thunk";
import binsReducer from "./binsReducer";
import boardsReducer from "./boardsReducer";

const rootReducer = combineReducers({
    session,
    bins: binsReducer,
    boards: boardsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;