import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = (props) => {
    const values = localStorage.getItem(props.name);
    const correctValues = JSON.parse(values);
    const location = correctValues.signUpLocation;
    const dateOfBirth = correctValues.signUpDateOfBirth;
  return (
    <>
    <div className='row' style={{display : "flex", backgroundColor : "blue"}}>
        <div className='col-md-6'>
            <h2 style={{color : "white", marginTop : "5px"}}>facebook</h2>
        </div>
        <div className='col-md-6'>
            <Link to = "/">
                <button className='btn bg-secondary m-2' style={{height : "37px", marginTop : "5px"}}>LOGOUT</button>
            </Link>
        </div> 
    </div>
    <h1 style={{marginTop : "10%"}}> {`Hi ${props.name}, Welcome to Facebook`}</h1>
    <div style={{marginTop : "5%"}}>
        <h4>Basic Details</h4>
        <div>
            <div>{`Name : ${props.name}`}</div>
            <div>{`HomeTown : ${location}`}</div>
            <div>{`Date Of Birth : ${dateOfBirth}`}</div>
        </div>
    </div>
    </>
  )
}

export default HomePage