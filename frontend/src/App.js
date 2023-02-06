import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFormPage from './components/loginFormPage/index';

function App() {
  return (
    <Router>
      <>
        <h1>Welcome to Binterest</h1>
        <img src= 'bin.png' alt="logo" width="50" height="50" />
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
     </>
    </Router>
  );
}

export default App;
