import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { SheetsRegistry, JssProvider, createUseStyles } from "react-jss";
import injectSheet, { jss, ThemeProvider } from "react-jss";

const styles = theme => ({
  button: {
    backgroundImage: theme.background
  },
  title: {
    margin: {
      top: 50,
      bottom: 50
    },
    fontWeight: "light"
  },
  score: {
    fontWeight: "bold",
    fontStyle: "italic"
  }
});

const Score = props => {
  const { num_correct, classes } = props;
  return (
    <Container>
      <Paper elevation={5} className={classes.button}>
        <Grid container justify="center" style={{ paddingTop: "50px" }}>
          <Typography variant="h4" className={classes.title}>
            Score:
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Typography className={classes.title} variant="h5">
            {num_correct}/10
          </Typography>
        </Grid>
      </Paper>
    </Container>
  );
};
const StyledScore = injectSheet(styles)(Score);

const theme = {
  background: "linear-gradient(-90deg, red, yellow)"
};

const ScoreComp = props => (
  <ThemeProvider theme={theme}>
    <StyledScore {...props} />
  </ThemeProvider>
);

// export default Score;

export default ScoreComp;
