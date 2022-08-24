import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import {useStateValue} from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        const values = Object.values(localStorage);
        let count = 0
        values.map(val => {
            const correctedValues = JSON.parse(val);
            if(email === correctedValues.signUpEmail && password === correctedValues.signUpPassword){
                alert('Login Successfull');
                navigate("/");
                const basketItems = correctedValues.basket
                console.log(basketItems)
                const keys = Object.keys(localStorage);
                keys.map(key => {
                    const data = localStorage.getItem(key);
                    const correctedData = JSON.parse(data);
                    if(correctedData.signUpEmail === email){
                        if(basketItems.length === 0) {
                            dispatch({
                                type : "USER_LOGGED_IN",
                                name : key,
                                password : password,
                                email : email,
                                isUserLoggedIn : true,
                                basket : []
                            })
                        }
                        else{
                            dispatch({
                                type : "USER_LOGGED_IN",
                                name : key,
                                password : password,
                                email : email,
                                isUserLoggedIn : true,
                                basket : basketItems
                            })
                        }
                    }
                })
            }
            else{
                count ++
            }
            if(values.length === count){
                alert('Login Insuccessfull')
            }
        })
    }

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to = "/register" style={{textDecoration : "none"}}>
                    <button className='login__registerButton'>Create your eShop Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;