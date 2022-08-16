import './App.css';
import LoginPage from './LoginPage';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import { useState } from 'react';

function App() {
  const[name, setName] = useState("");

  const handleName = (data) => {
    setName(data);
  }
  return (
    <div className="App">
      <Routes>
        <Route exact = {true} path = "/" element = {<LoginPage handleName = {handleName}/>} />
        <Route path = "/home" element = {<HomePage name = {name}/>} />
      </Routes>
    </div>
  )
}

export default App;
