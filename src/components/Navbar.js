import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ServiceDropDown from './services/ServiceDropDown';
import ProjectDropDown from './projects/ProjectDropDown';
import CompanyDropDown from './Company/CompanyDropDown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [pdropdown, setPDropdown] = useState(false);
  const [codropdown, setCoDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  const onProductMouseEnter = () => {
    if (window.innerWidth < 960) {
      setPDropdown(false)
    } else {
      setPDropdown(true)
    }
  }

  const onProductMouseLeave = () => {
    if (window.innerWidth < 960) {
      setPDropdown(false)
    } else {
      setPDropdown(false)
    }
  };
  const onCompanyMouseEnter = () => {
    if (window.innerWidth < 960) {
      setCoDropdown(false)
    } else {
      setCoDropdown(true)
    }
  }

  const onCompanyMouseLeave = () => {
    if (window.innerWidth < 960) {
      setCoDropdown(false)
    } else {
      setCoDropdown(false)
    }
  };



  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Green Life Africa
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'
            onMouseEnter={onCompanyMouseEnter}
            onMouseLeave={onCompanyMouseLeave}
          >
            <Link 
            to='/' 
            className='nav-links' 
            onClick={closeMobileMenu}
            >
              Home <i className='fas fa-caret-down' />
            </Link>
            {codropdown && <CompanyDropDown />}
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <ServiceDropDown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onProductMouseEnter}
            onMouseLeave={onProductMouseLeave}
          >
            <Link
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects <i className='fas fa-caret-down' />
            </Link>
            {pdropdown && <ProjectDropDown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/gallery'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>

        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
