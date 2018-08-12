import React, { Component } from "react";
import Location from "../containers/Location";
import Weather from "../containers/Weather";

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
