import React, { Component } from "react";

import "./NavItem.css";

class NavItem extends Component {
  render() {
    return (
      <div>
        <li>
          <button>{this.props.name}</button>
        </li>
      </div>
    );
  }
}

export default NavItem;
