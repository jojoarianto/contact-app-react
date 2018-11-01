import React, { Component } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact App" />
        <div className="container">
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
