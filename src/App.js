import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/Appbar/Appbar';
import Market from './components/Market/Market';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Market />
      
      </div>
    );
  }
}

export default App;
