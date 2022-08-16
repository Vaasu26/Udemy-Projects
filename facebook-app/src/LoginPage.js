import React, {useState} from 'react';
import Navbar from './Navbar';
import Body from './Body';

const LoginPage = (props) => {

  const[home, setHome] = useState(false);
  const[name, setName] = useState("");

  const handleHome = (data) => {
    setHome(data);
  }

  return (
      <div>
        <Navbar handleHome = {handleHome} handleName = {props.handleName}  />
        <Body />
      </div>
  )
}

export default LoginPage