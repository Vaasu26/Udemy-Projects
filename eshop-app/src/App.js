import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<><Navbar /> <Home /></>} />
          <Route path = "/checkout" element = {<><Navbar /> <Checkout /></>} />
          <Route path ="/login" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
