import usersReducer from './usersReducer';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import sessionReducer from './session';
import thunk from "redux-thunk";

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState);
};

export const rootReducer = combineReducers({
    user: usersReducer,
    session: sessionReducer
});

export default configureStore;