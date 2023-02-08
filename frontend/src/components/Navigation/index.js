import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navigation.css';
import home from "../../images/home.png";
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


    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(sessionActions.logout())
        history.push("/")
    }

    const buttonlogout = sessionUser ? <button id="logout" onClick={handleLogout}>Log Out </button> : null
    const buttonsignup = sessionUser ? null : <button id="signup" onClick={signupButton}>Sign Up</button>
    const buttonlogin = sessionUser ? null : <button id="login" onClick={loginButton}>Log In</button>

    return (
        <>
            <NavLink exact to="/"><img id="home" src={home} alt="home" /></NavLink>
            {/* <button id ="logout" onClick={handleLogout}>Log Out </button> 
            <button id ="signup" onClick={signupButton}>Sign Up</button>
            <button id ="login" onClick={loginButton}>Log In</button> */}
            {buttonsignup}
            {buttonlogin}
            {buttonlogout}
        </>
    );
}


export default Navigation;