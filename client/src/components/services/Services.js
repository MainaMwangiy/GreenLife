import React from 'react';
import '../../App.css';
import Cleaning from './Cleaning';
import Fumigation from './Fumigation';
// import './services.css'
import GarbageCollection from './Garbage-Collection';
import SanitaryBinCollection from "./Sanitary-bin-collection"

export default function Services() {
  return (
    <div className='container'>
      <GarbageCollection />
      <SanitaryBinCollection />
      <Cleaning />
      <Fumigation />
    </div>
  );
}
