import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  c = " zaeem";
  render() {
    return <div>Hello my first class based component{this.c}</div>;
  }
}
