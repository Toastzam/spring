import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [dropdown, setDropdown] = useState(false);
  
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
    <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <b>Me</b>:Right
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to='#' className='nav-links' onClick={closeMobileMenu}>
              Services ▼
            </Link>
            {dropdown && <Dropdown/>}
          </li>
          
          <li className='nav-item'>
            <Link to='/board' className='nav-links' onClick={closeMobileMenu}>
              Board
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/mypage' className='nav-links' onClick={closeMobileMenu}>
              My Page
            </Link>
          </li>

        </ul>
      </nav>
    </div>
);
}

export default Navbar;
