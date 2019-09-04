import React from 'react';
import './App.css';
import Cards from './Components/Cards';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Doglist from './Components/Doglist';


function App() {
  return (
    <Router>
      <Route path='/cards' component={Cards} />
      <Route path='/doglist' component={Doglist} />
    </Router>
  );
}

export default App;
