import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/services/Services';
import Project from './components/projects/Project';
import GarbageCollection from './components/services/Garbage-Collection';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Gallery from './components/pages/Gallery';
import About from './components/Company/About';
import SanitaryBinCollection from "./components/services/Sanitary-bin-collection"
import Cleaning from './components/services/Cleaning';
import Fumigation from './components/services/Fumigation';
import EnvironmentalJustice from './components/projects/environmental-justice';
import FoodSecurityAndNutrition from './components/projects/food-security-and-nutrition';
import Landing from './components/pages/Landing';
import CoreValues from './components/Company/core-values';
import Donate from './components/Company/Donate';
import volunteer from './components/Company/volunteer';
import Getinvolved from './components/Company/Get-involved';
import NewsLetters from './components/Resources/NewsLetters'
import Careers from './components/Resources/Careers'
import ProjectReports from './components/Resources/ProjectReports'

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch >``
          <Route path='/' exact component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/core-values' component={CoreValues} />
          <Route path='/services' component={Services} />
          <Route path='/projects' component={Project} />
          <Route path='/garbage-collection' component={GarbageCollection} />
          <Route path='/sanitary-bin-collection' component={SanitaryBinCollection} />
          <Route path='/cleaning' component={Cleaning} />
          <Route path='/fumigation' component={Fumigation} />
          <Route path='/environmental-justice' component={EnvironmentalJustice} />
          <Route path='/food-security-and-nutrition' component={FoodSecurityAndNutrition} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/news-letters' component={NewsLetters} />
          <Route path='/careers' component={Careers} />
          <Route path='/project-reports' component={ProjectReports} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/donate' component={Donate} />
          <Route path='/volunteer' component={volunteer} />
          <Route path="/get-involved" component={Getinvolved} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
