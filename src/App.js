import React, { Component } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Quiz from "./Quiz";
import Menu from "./Menu";
import { bounce } from "react-animations";
import { Router, Switch, Route } from "react-dom";
import { withRouter } from "react-router-dom";

const API_ENDPOINT = "https://opentdb.com/api.php?amount=10";
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        margin: {
          top: 40
        }
      },
      label: {
        color: "white",
        fontSize: 15,
        margin: "15px"
      }
    },
    MuiSelect: {
      selectMenu: {
        height: "20px"
      }
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "0",
      type: "0"
    };
  }
  handleTypeSelected = value => {
    console.log(value);
  };
  handleCategorySelected = value => {
    this.setState({
      category: value
    });
  };
  handleGo = () => {
    const category = this.state.category;
    this.props.history.push(`/trivia/${category}`);
  };
  render() {
    console.log("APP", this.state);
    return (
      <ThemeProvider theme={theme}>
        <Menu
          handleCategorySelected={this.handleCategorySelected}
          catSelected={this.state.category}
          handleGo={this.handleGo}
          typeSelected={this.state.type}
          handleTypeSelected={this.handleTypeSelected}
        />
      </ThemeProvider>
    );
  }
}

export default App;
