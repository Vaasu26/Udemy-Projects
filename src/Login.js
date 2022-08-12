import React, {useState} from 'react';
import './Login.css'
import swal from 'sweetalert';

const Login = () => {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(username === "vaasu2608" && password === "@Vaasu260897"){
            swal('Login Successfull', 'Çongratulations', 'success')
        }
        else{
            swal('Invalid Credentials', 'Please try again', 'error')
        }
    }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-4'>
            <h1>User Authentication</h1>
            <form className='form-group' onSubmit={handleSubmit}>
                <div className='name'>
                    <label for = "username">Username</label>
                </div>
                <input type = "text" id = "username" className='form-control' value = {username} onChange = {(e)=>{setUsername(e.target.value)}}></input>
                <div className='password'>
                    <label for = "password">Password</label>
                </div>
                <input type = "password" id = "password" className='form-control' value = {password} onChange = {(e)=>{setPassword(e.target.value)}}></input>
                <div className='button'>
                    <button type = "submit" className = 'btn btn-primary'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login