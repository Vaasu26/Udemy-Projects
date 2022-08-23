import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import "./navbar.css";
import {Link, useNavigate} from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Navbar = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();

  const signInOrSignOut = () => {
    dispatch({
      type : "SIGN_OUT_TO_LOGIN_PAGE",
      basket : [],
      isUserLoggedIn : false
    })
    navigate('/login')
  }

  return (
    <div className='header'>
      <Link to = "/" style={{textDecoration : "none"}}>
        <div className='header-logo'>
          <StorefrontIcon className='logo-image' fontSize='large'/>
          <h2 className="header-title">eSHOP</h2>
        </div>
      </Link>
      <div className="searchbar"> 
        <input className='search-input'></input>
        <SearchIcon className='search-icon'/>
      </div>
      <div className="navigation">
      <div className="nav-item">
        {!state.isUserLoggedIn ? <span className="nav-item-line1">Hello Guest</span> : <span className="nav-item-line1">Hello {state.name}</span>}
        {!state.isUserLoggedIn ? <button className="nav-item-line2" style={{backgroundColor : "#131921", color : "white", border : "none"}} onClick = {signInOrSignOut}>Sign In</button> : <button className="nav-item-line2" style={{backgroundColor : "#131921", color : "white", border : "none"}} onClick = {signInOrSignOut}>Sign Out</button>}
      </div>
        <div className="nav-item">
          <span className="nav-item-line1">Your</span>
          <span className="nav-item-line2">Shop</span>
        </div>
        <Link to = "/checkout" style = {{textDecoration : "none"}}>
          <div className='item-basket'>
              <ShoppingBasketIcon />
              {console.log(state.basket)}
            <span className="nav-item-line2 nav-item-basketCount">{state.basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar