import React, { Component } from 'react';
import DisplayItem from './DisplayItem';
import './GoogleBookApp.css';


class DisplayList extends Component {
  render() {

    const books = this.props.books
      .map((book) => (
        <DisplayItem
          bookDetails={{ ...book }}
          key={"book-" + book.id}
          url={"https://play.google.com/store/books/details?id=" + book.id}
        />
      ));

    return (
      <div className="display-list"  >
        {books}
      </div>
    )
  }
}

// Required blank prop so page renders with blank search on page load
DisplayList.defaultProps = {
  books: []
}

export default DisplayList;

