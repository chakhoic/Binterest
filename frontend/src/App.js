import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import CreateBinForm from './components/BinFormPage';
import ProfilePage from './components/ProfilePage';
import { useSelector } from 'react-redux';
import WaterfallPage from './components/WaterFall';
import Feed from './components/WaterFall';



function App() {

  const [bins, setBins] = useState([]);
  const [newBin, setNewBin] = useState(null);

  useEffect(() => {
    if (newBin)
      setBins(prevBins => [newBin, ...prevBins])
  }, [newBin])

  useEffect(() => {
    const fetchBins = async (userId, boardId) => {
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
            <CreateBinForm setNewBin={setNewBin} />
          </Route>
          <Route path='/createboard'>
          </Route>
          <Route path='/profile'>
            <ProfilePage />
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
