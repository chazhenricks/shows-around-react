import React, { Component } from "react";

import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div>
        <img src="" alt="" />
        <h2>{this.props.show.artist}</h2>
        <div className="card-venue-info">
          <p className="card-venu">{this.props.show.venue}</p>
          <p className="card-date">{this.props.show.date}</p>
          <p className="card-time">{this.props.show.time}</p>
        </div>
        <div className="card-show-info">
          <a href="#">Directions</a>
          <a href="#">Tickets</a>
        </div>
        <a href="#">Add To Tracked</a>
      </div>
    );
  }
}

export default Card;
