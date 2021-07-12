import React, { useState } from 'react';
import { ProductMenuItems } from './ProductMenuItems';
import './ProductDropDown.css';
import { Link } from 'react-router-dom';

function ProductsDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'prduct-menu clicked' : 'prduct-menu'}
      >
        {ProductMenuItems.map((item, index) => {
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
    </>
  );
}

export default ProductsDropdown;
