import React from 'react';
import './project.css'
import EnvironmentalJustice from './environmental-justice';
import FoodSecurityAndNutrition from './food-security-and-nutrition';

export default function Products() {
  return (
    <div className='container'>
      <EnvironmentalJustice />
      <FoodSecurityAndNutrition />
    </div>
  );
}
