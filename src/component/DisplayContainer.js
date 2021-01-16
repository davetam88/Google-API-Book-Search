import React, { Component } from 'react';
import DisplayList from './DisplayList';
import './GoogleBookApp.css';

class DisplayContainer extends Component {

  render() {


    return (
      <main>
          <DisplayList
            books={this.props.results}
          />

      </main>
    )
  }
}

export default DisplayContainer;

