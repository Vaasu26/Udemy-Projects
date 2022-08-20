import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<><Navbar /> <Home /></>} />
          <Route path = "/checkout" element = {<><Navbar /> <Checkout /></>} />
          <Route path="/login" element = {<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
