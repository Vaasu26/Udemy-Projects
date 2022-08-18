import React from 'react'

const Navbar = () => {
  return (
    <div className='row' style={{display : "flex", backgroundColor : "black", color : "white", alignItems : "center", marginBottom : "20px"}}>
        <div className='col-md-3'>
            <h2>React Meals</h2>
        </div>
        <div className='col-md-9' style={{textAlign : "right", paddingRight : "40px"}}>
            <a href = "" style = {{color : "white", marginRight : "15px"}}>Home</a>
            <a href = "" style = {{color : "white", marginRight : "15px"}}>Order</a>
            <a href = "" style = {{color : "white"}}>Contact Us</a>
        </div>
    </div>
  )
}

export default Navbar