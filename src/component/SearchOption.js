import React, { Component } from 'react';
import './GoogleBookApp.css';


class SearchOption extends Component {
  render() {

    return (
      <div className="filter_wrapper">

        <div className="sel-wrapper">
          <label htmlFor="search-cost">Cost: </label>

          <select
            id="search-cost"
            name="search-cost"
            defaultValue="ebooks"
            onChange={e => this.props.costChanged(e.target.value)}
          >
            <option
              value="ebooks"
              key="cost-all"
              id="cost-all"
            >
              All
					</option>
            <option
              value="free-ebooks"
              key="cost-free"
              id="cost-free"
            >
              Free
					</option>
            <option
              value="paid-ebooks"
              key="cost-paid"
              id="cost-paid"
            >
              Paid
					</option>
          </select>
        </div>
        <div className="sel-wrapper">
          <label
            htmlFor="search-method"
          >
            Search Method:
				</label>
          <select
            id="search-method"
            name="search-method"
            defaultValue="relevance"
            onChange={e => this.props.methodChanged(e.target.value)}
          >
            <option
              value="relevance"
              key="input-relevance"
              id="input-relevance"
            >
              Relevant
					</option>
            <option
              value="newest"
              key="input-newest"
              id="input-newest"
            >
              Newest
					</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchOption;

            // <option value="ebooks" id="cost-all" selected>All</option>
            // <option value="free-ebooks" id="cost-free">Free</option>
            // <option value="paid-ebooks" id="cost-paid">Paid</option>
