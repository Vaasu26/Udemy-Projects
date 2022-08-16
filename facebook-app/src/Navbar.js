import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = (props) => {

  const[name, setName] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkDetails = () => {
    let values = Object.values(localStorage);
    let count = 0;
    console.log(typeof values)
    values.map(value => {
      const correctValue =JSON.parse(value)
      if(correctValue.signUpUsername === name && correctValue.signUpPassword === password){
        alert('Login Successfull');
        props.handleHome(true);
        let keys = Object.keys(localStorage);
        console.log(typeof keys, keys);
        keys.map(key => {
          const data = localStorage.getItem(key);
          console.log(data);
          const correctedData = JSON.parse(data);
          console.log(correctedData, name, correctedData.signUpUsername, key)
          if(correctedData.signUpUsername === name){
            props.handleName(key);
            console.log(key);
          }
        })
        navigate("/home")
      }
      else{
        count ++;
      }
    })
    if(values.length === count){
      alert('Login Insuccessfull')
    }
  }

  return (
    <div className='row' style={{display : "flex", backgroundColor : "blue"}}>
        <div className='col-md-6'>
            <h2 style={{color : "white", marginTop : "5px"}}>facebook</h2>
        </div>
        <div className='col-md-6' style={{display : "flex"}}>
            <input type = "text" placeholder='Username' onChange={(e) => {setName(e.target.value)}} className='form-control m-2' style={{width : "200px", height : "35px", marginTop : "8px"}}></input>
            <input type = "password" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}} className='form-control m-2' style={{width : "200px", height : "35px", marginTop : "8px"}}></input>
            <button className='btn bg-secondary m-2' style={{height : "37px", marginTop : "5px"}} onClick = {checkDetails}>LOGIN</button>
        </div>
    </div>
  )
}

export default Navbar