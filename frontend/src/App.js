import React from 'react';
import {useState , useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import UploadForm from './components/BinFormPage';


function App() {
  
  // const [bins, setBins] = useState([]);

  // useEffect(() => {
  //   const fetchBins = async () => {
  //     const res = await fetch("/api/bins");
  //     setBins(await res.json());
  //   }
  //   fetchBins();
  // }, []);

  return (
    <>
    {/* <PostIndex posts={posts} /> */}
    < Router >
      <Navigation />
    <Switch>
          <Route path='/createbin'>
            <UploadForm />
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
