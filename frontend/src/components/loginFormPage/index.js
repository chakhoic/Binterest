import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "./loginForm.css";
import logo from "../../images/b.png";


function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
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

    return (
        <div id="loginback">
        <div id="box">
            <img id="logo" src={logo} alt="logo" width="100" height="100" />
            <h1>Welcome to 🅱interest</h1>
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label id= "email">
                Email: 
                <br></br>
                <input
                className='input'
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </label>
            <br></br>
            <label>
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
            <button id="button" type="submit">Log In</button>
            <br></br>
            <p>OR</p>
            <button id ="button" type="submit">Demo User</button>
        </form>
        </div>
        </div>
    );
}

export default LoginFormPage;