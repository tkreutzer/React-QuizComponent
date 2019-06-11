import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import Quiz from "./Quiz";

class App extends Component {
  render() {
    return <Quiz />;
  }
}

export default App;
