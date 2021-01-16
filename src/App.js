import React, { Component } from 'react';
import GoogleBookApp from './component/GoogleBookApp';
import './component/GoogleBookApp.css';

class App extends Component {

  render() {

    return (
      <div className="App-container">
        <GoogleBookApp />
      </div>
    );
  }
}

export default App;
