import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import "./loginForm.css";
import logo from "../../images/b.png";
import { NavLink } from 'react-router-dom';



function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory()


    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ email, password }))
            .catch(async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    const demoLogin = async (e) => {
        e.preventDefault();
        await dispatch(sessionActions.login({ email: 'demo@user.io', password: 'password' }));
        history.push('/feed');
    };


    return (
        <div id="loginback">
        <div id="box">
            <img id="logo" src={logo} alt="logo" width="100" height="100" />
                <h1>Welcome to 🅱interest™</h1>
            <br></br>
            <h2>Log in to see more</h2>
            <br></br>

        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label id= "textz">
                Email: 
                <br></br>
                <input
                className='input'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <br></br>
            <label id= "textz">
                Password: 
                <br></br>
                <input
                className='input'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br></br>
            <label id="forgot">
                Forgot your password?
            </label>
            <br></br>
            <button id="loginbutton" type="submit">Log In</button>
            <br></br>
            <br></br>
            <p id="or">OR</p>
            <br></br>
            <button id ="demobutton" onClick={ demoLogin }>Demo User</button>
            <br></br>
             <br></br>

            <p>By continuing, you agree to 🅱interest's Terms of Service</p>
            <hr></hr>
            <NavLink id="notyet" exact to="/signup"> Not on Pinterest yet? Sign up </NavLink>
        </form>
        </div>
        </div>
    );
}

export default LoginFormPage;