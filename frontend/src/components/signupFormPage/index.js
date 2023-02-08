import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./signupForm.css";
import logo from "../../images/b.png";


function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        debugger
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, password }))
                .catch(async (res) => {
                    let data;
                    try {
                        // .clone() essentially allows you to read the response body twice
                        data = await res.clone().json();
                    } catch {
                        // data = await res.text(); // Will hit this case if the server is down
                    }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div id="box2">
            <img id="logo" src={logo} alt="logo" width="100" height="100" />
            <h1>Welcome to 🅱interest</h1>
            <h2>Find out</h2>
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label id="textz">
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
            <label id="textz">
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
            <label id="textz">
                Confirm Password:
                <br></br>
                <input
                    className='input'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </label>
            <br></br>
            <button id="continue" type="submit">Continue</button>
        </form>
        </div>
    );
}

export default SignupFormPage;