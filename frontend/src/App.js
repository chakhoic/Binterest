import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import BinCreatePage from './components/BinFormPage';
import ProfilePage from './components/ProfilePage';
import Feed from './components/WaterFall';
import BoardPage from './components/BoardPage/BoardPage'
import BinPage from './components/BinPage/BinPage'
import csrfFetch from './store/csrf';

function App() {

  const [bins, setBins] = useState([]);
  const [boards, setBoards] = useState([]);
  const [newBin, setNewBin] = useState(null);


  useEffect(() => {
    const fetchBins = async () => {
      const res = await csrfFetch(`/api/bins`);
      setBins(await res.json());
    }
    fetchBins();
  }, []);

  // useEffect(() => {
  //   if (newBin)
  //     setBins(prevBins => [newBin, ...prevBins])
  // }, [newBin])


  useEffect(() => {
    const fetchBoards = async () => {
      const res = await fetch(`/api/boards`);
      setBoards(await res.json());
    }
    fetchBoards();
  }, []);

  return (
    <>
      < Router >
        <Navigation />
        <Switch>
          <Route path='/createbin'>
            <BinCreatePage setNewBin={setNewBin}/>
          </Route>
          <Route path='/feed'>
            <Feed />
          </Route>
          <Route path='/createboard'>
          </Route>
          <Route path='/profile'>
            <ProfilePage />
          </Route>
          <Route path='/boards/:boardid'>
            <BoardPage bins={bins} boards={boards}/>
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
