import React, { Component } from 'react';
import './App.css';
import BeerDisplayAll from './Components/BeerDisplayAll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeerDisplayAll/>
      </div>
    );
  }
}

export default App;
