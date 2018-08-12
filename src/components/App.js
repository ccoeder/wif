import React, { Component } from "react";
import Location from "./Location";
import Weather from "./Weather";

class App extends Component {
  render() {
    return (
      <div class="container">
        <Location />
        <Weather />
      </div>
    );
  }
}

export default App;
