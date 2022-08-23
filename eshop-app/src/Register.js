import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { useState } from "react";
import "./register.css"

const Register = () => {
    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const addData = () => {
        if(name && email && password){
            var datas = []
            var data = 
                {
                    signUpPassword : password,
                    signUpEmail : email,
                    basket : []
                }
        
            datas.push(localStorage.setItem(name, JSON.stringify(data)))
            alert('Sign Up Successfull');
            navigate('/login')
        }
        else{
            alert('Please fill all the details')
        }
    }

  return (
    <div className='register'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="register__logo">
                    <StorefrontIcon className="register__logoImage" fontSize="large" />
                    <h2 className="register__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='register__container'>
                <h1>Register</h1>

                <form>
                    <h5>Name</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='register__signInButton' onClick = {addData}>Sign Up</button>
                    <Link to = "/login" style={{textDecoration : "none"}}>
                        <button className='register__goToLoginButton'>Go to Login Page</button>
                    </Link>
                </form>
            </div>
        </div>
  )
}

export default Register