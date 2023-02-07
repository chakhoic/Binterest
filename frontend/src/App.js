import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";


function App() {
  return (
    <>
    < Router >
      <Navigation />
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
            <SignupFormPage />
      {/* <Route path="/:username"></> */}
      </Route>
    </Switch>
     </Router>
     </>
  );
}

export default App;
