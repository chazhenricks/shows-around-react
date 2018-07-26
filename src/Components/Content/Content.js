import React, { Component } from "react";
import Card from "./Card/Card.js";

import "./Content.css";

class Content extends Component {

  
  renderCards = (show, index) => {
    const cardKey = `card-item-${index}`;
    return <Card key={cardKey} show={show} />;
  };

  render() {
    return this.props.shows ? (
      <div className="content">{this.props.shows.map(this.renderCards)}</div>
    ) : null;
  }
}

export default Content;
