import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <StorefrontIcon className='logo-image' fontSize='large'/>
        <h2 className="header-title">eSHOP</h2>
      </div>
      <div className="searchbar"> 
        <input className='search-input'></input>
        <SearchIcon className='search-icon'/>
      </div>
      <div className="navigation">
        <div className="nav-item">
          <span className="nav-item-line1">Hello Guest</span>
          <div className="nav-item-line2">Sign In</div>
        </div>
        <div className="nav-item">
          <span className="nav-item-line1">Your</span>
          <span className="nav-item-line2">Shop</span>
        </div>
        <div className='item-basket'>
          <ShoppingBasketIcon />
          <span className="nav-item-line2 nav-item-basketCount">0</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar