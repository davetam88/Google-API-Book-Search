import React, { Component } from 'react';
import './GoogleBookApp.css';
import SearchBar from './SearchBar';
import DisplayContainer from './DisplayContainer';


class GoogleBookApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      error: null,
    }
  }

  // call this when book change.
  updateBooks = (books) => {
    this.setState({
      results: books
    })
  }

  render() {
    
    return (
      <>
        <SearchBar updateBooks={this.updateBooks}
        />
        <DisplayContainer results={this.state.results}
        />
      </>
    )
  }
}

export default GoogleBookApp;
