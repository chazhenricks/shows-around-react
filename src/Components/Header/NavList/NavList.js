import React, { Component } from "react";
import NavItem from "./NavItem/NavItem.js";

import "./NavList.css";

class NavList extends Component {
  render() {
    return (
      <ul className="navlist-ul">
        <NavItem name="Location" />
        <NavItem name="Log Out" />
      </ul>
    );
  }
}

export default NavList;
