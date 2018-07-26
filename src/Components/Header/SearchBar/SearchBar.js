import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <input type="text" placeholder="Search For Other Artist" />
        <button type="button">Search </button>
      </div>
    );
  }
}

export default SearchBar;
