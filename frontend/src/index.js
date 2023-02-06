// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { restoreSession } from './store/csrf';
// import { createUser, loginUser, logoutUser } from './store/users';
// import { configureStore } from './store/index';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import csrfFetch, { restoreCSRF } from './store/csrf';

// window.createUser = createUser
// window.loginUser = loginUser
// window.logoutUser = logoutUser


// const store = configureStore();

// if (process.env.NODE_ENV !== 'production') {
//   window.store = store;
// }

// let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
// let initialState = {};

// if (currentUser) {
//   initialState = {
//     users: {
//       [currentUser.id]: currentUser
//     }
//   };
// };


// const initializeApp = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// restoreSession().then(initializeApp)

// if (
//   sessionStorage.getItem("currentUser") === null ||
//   sessionStorage.getItem("X-CSRF-Token") === null
// ) {
//   store.dispatch(sessionActions.restoreSession()).then(renderApplication);
// } else {
//   renderApplication();
// }



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/usersReducer.js';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';




let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
let initialState = {};

if (currentUser) {
  initialState = {
    users: {
      [currentUser.id]: currentUser
    }
  };
};

const store = configureStore(initialState);

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

restoreSession().then(InitializeApp)