import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ServiceDropDown from './services/ServiceDropDown';
import ProjectDropDown from './projects/ProjectDropDown';
import ResourcesDropDown from './Resources/ResourcesDropDown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [pdropdown, setPDropdown] = useState(false);
  const [redropdown, setReDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
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
      setPDropdown(true)
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

  const onResourcesMouseEnter = () => {
    if (window.innerWidth < 960) {
      setReDropdown(true)
    } else {
      setReDropdown(true)
    }
  }

  const onResourcesMouseLeave = () => {
    if (window.innerWidth < 960) {
      setReDropdown(false)
    } else {
      setReDropdown(false)
    }
  };




  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        Green Life Africa
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link
            to='/'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Home
          </Link>
        </li>
        <li
          className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
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
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Programs <i className='fas fa-caret-down' />
          </Link>
          {pdropdown && <ProjectDropDown />}
        </li>
        <li className='nav-item'
          onMouseEnter={onResourcesMouseEnter}
          onMouseLeave={onResourcesMouseLeave}
        >
          <Link
            // to='/'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Resources <i className='fas fa-caret-down' />
          </Link>
          {redropdown && <ResourcesDropDown />}
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
  );
}

export default Navbar;
