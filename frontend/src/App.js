import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import CreateBinForm from './components/BinFormPage';
import ProfilePage from './components/ProfilePage';
import Feed from './components/WaterFall';
import BoardPage from './components/BoardPage/BoardPage'
import BinPage from './components/BinPage/BinPage'
import { fetchBins } from './store/binsReducer';


function App() {

  const [bins, setBins] = useState([]);

  useEffect(() => {
    const fetchBins = async () => {
      const res = await fetch(`/api/bins`);
      setBins(await res.json());
    }
    fetchBins();
  }, []);


  return (
    <>
      < Router >
        <Navigation />
        <Switch>
          <Route path='/feed'>
            <Feed />
          </Route>
          <Route path='/createbin'>
            <CreateBinForm />
          </Route>
          <Route path='/createboard'>
          </Route>
          <Route path='/profile'>
            <ProfilePage />
          </Route>
          <Route path='/boards/:boardid'>
            <BoardPage />
          </Route>
          <Route path='/bins/:binid'>
            <BinPage bins={bins}/>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
