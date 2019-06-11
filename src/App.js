import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import Quiz from "./Quiz";
// const theme = {
//   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
// };

class App extends Component {
  render() {
    return <Quiz />;
  }
}

export default App;
