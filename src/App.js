import React, { Component } from 'react';
import Header from './components/Header';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact App" />
      </div>
    );
  }
}

export default App;
