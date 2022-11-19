import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function header() {
  return (
    <div className="header">
      <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
      <div className="header_search">
        <input className="header_searchinput" type="text"/>
        <SearchIcon className="header_searchIcon"/>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className='header_optionLineone'>Hello guest</span>
          <span className='header_optionLinetwo'>Sign in</span>
        </div>
        <div className="header_option">
          <span className='header_optionLineone'>Returns</span>
          <span className='header_optionLinetwo'>Orders</span>
        </div>
        <div className="header_option">
          <span className='header_optionLineone'>Your</span>
          <span className='header_optionLinetwo'>Prime</span>
        </div>
        <div class='header_optionBasket'>
          <ShoppingBasketIcon/>
          <span className='header_optionLinetwo header_basketCount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default header
