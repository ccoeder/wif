import React, { Component } from "react";
import Location from "./Location";
import Weather from "./Weather";

class App extends Component {
  render() {
    return (
      <div>
        <Location />
        <Weather />
      </div>
    );
  }
}

export default App;
