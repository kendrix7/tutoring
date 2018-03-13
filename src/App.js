import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import router from './router.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {router}
        </div>
      </HashRouter>
    );
  }
}

export default App;
