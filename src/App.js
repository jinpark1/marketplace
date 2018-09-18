import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/Appbar/Appbar';
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
          {Routes}
      
      </div>
    );
  }
}

export default App;
