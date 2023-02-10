import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navigation.css';
import home from "../../images/home.png";
import logo from "../../images/b.png"
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


    if (!sessionUser) {
    return (
        <>
            <NavLink exact to="/"><img id="home" src={home} alt="home" /></NavLink>
            {buttonsignup}
            {buttonlogin}
        </>
    );
} else {
        return (
            <>
            <div id="bar">
                <div>
                <NavLink exact to="/"><img id="home" src={home} alt="home" /></NavLink>
                </div>
                <div >
                        <select id="dropdown">
                        <option value="create">Create</option>
                        <option value="ideapin">Create Idea Pin</option>
                        <option value="pin">Creat Pin</option>
                    </select>
                </div>
                <div id="search">
                <label >
                    <input type="text" placeholder="Search.." name="search"></input>
                </label>
                </div>
                <div>
                {buttonlogout}
                </div>
                </div>
            </>
            )
        }
    }



export default Navigation;