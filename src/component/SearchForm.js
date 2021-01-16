import React, { Component } from 'react';
import './GoogleBookApp.css';
import SearchOption from './SearchOption';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      cost: "ebooks",
      method: "relevance",
      maxResults: 6,
    }
  }

  // search text change with submit
  searchTermChanged(searchTerm) {

    this.setState({
      searchTerm
    })
  }

  // first select 
  costChanged = (cost) => {
    this.setState({
      cost
    })
  }

    // second select 
  methodChanged = (method) => {
    this.setState({
      method
    })
  }

  // Builds the final search URL based on our state
    constructUrl(params) {
    let baseUrl = "https://www.googleapis.com/books/v1/volumes";
    const key = "AIzaSyCBWtXEKU-wYT-oPeOjn2-n6R6oi-BN5Ys";
    if (this.state.searchTerm === "")
    {
      alert("You need to enter a search term");
      return;
    } else
    {
      baseUrl += ("?q=" + params.searchTerm);
    }
    baseUrl += ("&filter=" + params.cost);
    baseUrl += ("&orderBy=" + params.method);

    if (this.state.maxResults !== 0)
    {
      baseUrl += ("&maxResults=" + params.maxResults);
    }
    baseUrl += ("&key=" + key);
    return baseUrl;
  }

  queryBooks(e) {
    e.preventDefault(e);
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };

    const endpointUrl = this.constructUrl(this.state);


    fetch(endpointUrl, options)
      .then(res => {
        if (!res.ok)
        {
          alert("You need a search term");
          throw new Error("Something went wrong")
        }
        return res;
      })
      .then(res => (
        res.json()
      ))
      .then(data => {
        // Handles when no results are found
        if (data.totalItems !== 0)
        {
          // Empty results to ensure no duplicates sneak in
          // this.props.updateBooks([]);
          
          this.props.updateBooks(data.items);
        } else
        {
          alert("We found no books that match your search");
        }

      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <form
        className="form-wrapper"
        onSubmit={e => this.queryBooks(e)}
      >
        <label htmlFor="title">Search:</label>
        <input
          type="text"
          className="search-input"
          placeholder='Name Of Book'
          onChange={e => this.searchTermChanged(e.target.value)}

        />
        <button type="submit"
          className="search-input"
        >
          Search
          </button>
        <SearchOption
          // pass in the cb
          costChanged={this.costChanged}
          methodChanged={this.methodChanged}
        />
      </form>
    )
  }
}

export default SearchForm;



