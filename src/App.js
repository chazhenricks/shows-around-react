import React, { Component } from "react";
import queryString from "query-string";
import ShowData from "./Data/ShowData.js";

import filterShows from "./Utility/filterShows.js";

import Header from "./Components/Header/Header.js";
import Content from "./Components/Content/Content.js";

import "./App.css";

class App extends Component {
  state = { location: "Nashville", isLoggedIn: false };

  componentDidMount() {
    this.initializeDummyData();
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    this.getUserTopArtists(accessToken);
  }

  initializeDummyData = () => {
    this.setState({
      shows: ShowData
    });
  };

  getUserTopArtists = accessToken => {
    fetch("https://api.spotify.com/v1/me/top/artists?limit=50", {
      headers: { Authorization: "Bearer " + accessToken }
    })
      .then(response => response.json())
      .then(data => {
        const topArtists = data.items.map(artist => {
          console.log(artist);
          const artistInfo = {
            name: artist.name,
            picture: artist.images[0] ? artist.images[0].url : ""
          };
          return artistInfo;
        });
        this.setState({ topArtists });
      })
      .then(() => this.getShowsFromArtists());
  };

  getShowsFromArtists = () => {
    let promiseArray = [];
    let artistShowsArray = [];
    let artists = this.state.topArtists;

    for (let i = 0; i < artists.length; i++) {
      promiseArray.push(
        fetch(
          `https://rest.bandsintown.com/artists/${
            artists[i].name
          }/events?app_id=shows_around`
        )
          .then(response => response.json())
          .then(data => data)
      );
    }
    Promise.all(promiseArray)
      .then(response => artistShowsArray.push(response))
      .then(() => {
        let localShows = this.getLocalShows(artistShowsArray[0]);
        this.setState({ shows: localShows });
      });
  };

  getLocalShows = artistShows => {
    let localShows = [];
    artistShows.map(artist => {
      artist.map(shows => {
        if (shows.venue.city == this.state.location) {
          let localShow = {
            artist: shows.lineup[0],
            venue: shows.venue.name,
            date: shows.datetime,
            ticketURL: shows.offers[0] ? shows.offers[0].url : ""
          };
          localShows.push(localShow);
        }
      });
    });
    return localShows;
  };

  render() {
    return (
      <div className="App">
        <Header />

        <button>
          <a href="localhost:8888/login">Login</a>
        </button>
        <Content shows={this.state.shows} />
      </div>
    );
  }
}

export default App;
