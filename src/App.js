import React, { Component } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact App" />
        <div className="container">
          <Contact
            name="Irianto"
            phone="085732401129"
            email="irianto94@outlook.com"
          />
          <Contact
            name="Doni Kurniawan"
            phone="081234567890"
            email="doni@outlook.com"
          />
          <Contact
            name="Bambang Arianto"
            phone="081234567890"
            email="bambang@outlook.com"
          />
        </div>
      </div>
    );
  }
}

export default App;
