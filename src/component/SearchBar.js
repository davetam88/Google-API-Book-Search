import React, { Component } from 'react';
import SearchForm from './SearchForm';
import './GoogleBookApp.css';

class SearchBar extends Component {
  render() {

    return (
      <header className="header_container">
        <h1 className="App-title">Google Book Search</h1>
        <div className="status">
        </div>
        <SearchForm updateBooks={this.props.updateBooks}
        />
      </header>
    )
  }
}

export default SearchBar;

