import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

export class App extends Component {
  onTermSubmit = async term => {
    try {
      const res = await youtube.get("/search", {
        params: {
          q: term
        }
      });
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
