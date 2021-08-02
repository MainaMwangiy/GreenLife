import React, { useState } from 'react';
import { CompanyMenuItems } from './CompanyMenuItems';
import './CompanyDropDown.css';
import { Link } from 'react-router-dom';

function CompanyDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? 'company-menu clicked' : 'company-menu'}
    >
      {CompanyMenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CompanyDropdown;
