import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/usersReducer.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { csrfFetch,  restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session'

let initialState = {};

const store = configureStore(initialState);

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
}


let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));


if (currentUser) {
  initialState = {
    users: {
      [currentUser.id]: currentUser
    }
  };
};



window.createUser = createUser
window.loginUser = loginUser
window.logoutUser = logoutUser

const InitializeApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

ReactDOM.render(
  <React.StrictMode>
    <InitializeApp />
  </React.StrictMode>,
  document.getElementById('root')
);

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}

restoreSession().then(InitializeApp)
