import React from 'react'
import { useState } from 'react'
import fb from './fb.avif'

const Body = (props) => {

    const[name, setName] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[location, setLocation] = useState("");
    const[dateOfBirth, setDateOfBirth] = useState("");
    const addData = () => {
        if(name && username && password){
            var datas = []
            var data = 
                {
                    signUpUsername : username,
                    signUpPassword : password,
                    signUpLocation : location,
                    signUpDateOfBirth : dateOfBirth
                }
        
            datas.push(localStorage.setItem(name, JSON.stringify(data)))
            alert('Sign Up Successfull');
        }
        else{
            alert('Please fill all the details')
        }
    }

  return (
    <div className='row'>
        <div className='col-md-6' style = {{marginTop : "5%"}}>
            <img src={fb} alt=""/>
        </div>
        <div className='col-md-6'>
            <h2 style={{marginTop : "80px"}}>Register</h2>
            <form className='form-group'>
                <div>
                <input type = "text" placeholder='Name' value = {name} onChange={(e) => {setName(e.target.value)}} className='form-control' style={{width : "350px", height : "35px", marginTop : "20px", marginLeft : "200px"}}></input>
                </div>
                <div>
                    <input type = "text" placeholder='Username' value={username} onChange={(e) => {setUsername(e.target.value)}} className='form-control' style={{width : "350px", height : "35px", marginTop : "20px", marginLeft : "200px"}}></input>
                </div>
                <div>
                    <input type = "password" placeholder='Password' value = {password} onChange={(e) => {setPassword(e.target.value)}} className='form-control' style={{width : "350px", height : "35px", marginTop : "20px", marginLeft : "200px"}}></input>
                </div>
                <div>
                    <input type = "text" placeholder='Location' value = {location} onChange={(e) => {setLocation(e.target.value)}} className='form-control' style={{width : "350px", height : "35px", marginTop : "20px", marginLeft : "200px"}}></input>
                </div>
                <div>
                    <input type = "date" placeholder='Date of Birth' value = {dateOfBirth} onChange={(e) => {setDateOfBirth(e.target.value)}} className='form-control' style={{width : "350px", height : "35px", marginTop : "20px", marginLeft : "200px"}}></input>
                </div>
                <div>
                    <button className='btn btn-primary' style={{marginTop : "20px"}} onClick = {addData}>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Body