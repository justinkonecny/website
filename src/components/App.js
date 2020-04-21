import React, { Component } from 'react';
import { MainRoutes } from '../mainRoutes.js';
import '../css/App.scss';

/**
 * The main, multi-page website.
 */
class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Handles rendering of different pages, based on the current address */}
        <MainRoutes />
      </div>
    );
  }
}

export default App;
