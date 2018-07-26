import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar.js";
import NavList from "./NavList/NavList.js";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-title">Shows Around</h1>
        <SearchBar  />
        <NavList  />
      </div>
    );
  }
}

export default Header;
