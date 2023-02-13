import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navigation.css';
import home from "../../images/home.png";
import profileicon from "../../images/usericon.png"
// import logo from "../../images/b.png"
import * as sessionActions from '../../store/session'


function Navigation() {
    const sessionUser = useSelector(state => state.session.user);

    // let sessionLinks;
    // if (sessionUser) {
    //     sessionLinks = (
    //         <ProfileButton user={sessionUser} />
    //     );
    // } else {
    //     sessionLinks = (
    //         <>
    //             <NavLink to="/login">Log In</NavLink>
    //             <NavLink to="/signup">Sign Up</NavLink>
    //         </>
    //     );
    // }

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

    // const profileButton = () => {
    //     history.push("/profile")
    // }

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
    // const buttonprofile = sessionUser ? <button id="profile" onClick={profileButton}>Profile</button> : null

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
            <div id="bar">
                <div>
                <NavLink exact to="/"><img id="home" src={home} alt="home" /></NavLink>
                {buttoncreate}
                </div>
                <label >
                        <input id="search" type="search" placeholder="🔍 Search bar is under maintenance..." name="search"></input>
                </label>
                <div>
                <NavLink exact to="/profile"><img id="profile" src={profileicon} alt="profile" /></NavLink>
                {buttonlogout}
                </div>
                </div>
            </>
            )
        }
    }



export default Navigation;