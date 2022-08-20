import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import "./navbar.css";
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Navbar = () => {
  const [{basket}, dispatch] = useStateValue();
  console.log(basket)
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
        <Link to = "/login" style={{textDecoration : "none"}}>
          <div className="nav-item">
            <span className="nav-item-line1">Hello Guest</span>
            <div className="nav-item-line2">Sign In</div>
          </div>
        </Link>
        <div className="nav-item">
          <span className="nav-item-line1">Your</span>
          <span className="nav-item-line2">Shop</span>
        </div>
        <Link to = "/checkout" style = {{textDecoration : "none"}}>
          <div className='item-basket'>
              <ShoppingBasketIcon />
            <span className="nav-item-line2 nav-item-basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar