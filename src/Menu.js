import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import jss from "jss";
import preset from "jss-preset-default";
import Categories from "./Categories";

jss.setup(preset());

const { classes } = jss
  .createStyleSheet({
    title: {
      padding: {
        top: 30,
        bottom: 30
      }
    },
    instructions: {
      padding: {
        top: 10,
        bottom: 10
      },
      fontSize: 28
    }
  })
  .attach();

class Menu extends Component {
  constructor(props) {
    super(props);
    const { handleCategorySelected } = this.props;
  }
  render() {
    console.log("menu this", this);
    return (
      <Fragment>
        <Grid container justify="center">
          <Typography variant="h2" className={classes.title}>
            Trivia
          </Typography>
        </Grid>
        <hr />
        <Grid container justify="center">
          <Box fontWeight="fontWeightLight" className={classes.instructions}>
            Select a category from the dropdown
          </Box>
          <Categories
            handleGo={this.props.handleGo}
            handleCategorySelected={this.props.handleCategorySelected}
            catSelected={this.props.catSelected}
            typeSelected={this.props.type}
            handleTypeSelected={this.props.handleTypeSelected}
          />
        </Grid>
      </Fragment>
    );
  }
}
export default Menu;
