import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navigation.css';
import home from "../../images/home.png";
import * as sessionActions from '../../store/session'
import pushingp from "../../images/icon.jpeg"
import link from "../../images/link.png"
import git from "../../images/git.png"


function Navigation() {
    const sessionUser = useSelector(state => state.session.user);

    const history = useHistory()

    const loginButton = () => {
        history.push("/login")
    }

    const signupButton = () => {
        history.push("/signup")
    }

    const createButton = () => {
        history.push("/createbin")
    }

    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(sessionActions.logout())
        history.push("/")
    }

    const buttonlogout = sessionUser ? <button id="logout" onClick={handleLogout}>Log Out </button> : null
    const buttonsignup = sessionUser ? null : <button id="signup" onClick={signupButton}>Sign Up</button>
    const buttonlogin = sessionUser ? null : <button id="login" onClick={loginButton}>Log In</button>
    const buttoncreate = sessionUser ? <button id="dropdown" onClick={createButton}> Create Bin ⬇ </button> : null

    if (!sessionUser) {
    return (
        <>
        <div id="bar">
            <NavLink exact to="/"><img id="home" src={home} alt="home" /></NavLink>
            {buttonsignup}
            {buttonlogin}

        </div>
        </>
    );
} else {
    return (
        <>
            <div id="bar2">
                <div id="homelink">
                    <NavLink exact to="/feed"><img id="home" src={home} alt="home" /></NavLink>
                    
                </div>
                {buttoncreate}

                <label>
                    <input id="search" type="search" placeholder="🔍 Search bar is under maintenance..." name="search"></input>
                </label>
                <div>
                    <a href="https://github.com/chakhoic"><img id="git" src={git} alt="git" /></a>
                    <a href='https://www.linkedin.com/in/chak-hoi-chan-19672046/'><img id="link" src={link} alt="link" /></a>
    
                    <NavLink exact to="/profile"><img id="profile" src={pushingp} alt="profile" /></NavLink>
                    {buttonlogout}
                </div>
            </div>
        </>
    );
    }
}    


export default Navigation;


