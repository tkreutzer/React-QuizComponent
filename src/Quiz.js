import React, { Component } from "react";
import he from "he";

import { ThemeProvider } from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

import QuizQuestion from "./QuizQuestion";
import Score from "./Score";
let quizData = require("./quiz_data.json");
const API_ENDPOINT = "https://opentdb.com/api.php?amount=10";

function TransitionDown(props) {
  return <Slide {...props} direction="up" />;
}

const styles = {
  quizQuestion: {
    paddingLeft: "50px",
    paddingRight: "50px",
    marginBottom: "1%",
    marginTop: "1%"
  }
};

class Quiz extends Component {
  constructor(props) {
    super(props);
    const classes = this.props;
    this.state = {
      quiz_position: 0,
      open: false,
      num_correct: 0
    };
    this.getQuestion();
  }
  resetQuiz = () => {
    setTimeout(() => {
      this.setState({
        questions: null,
        answer: null,
        quiz_position: 0,
        open: false,
        num_correct: 0
      });
      this.getQuestion();
    }, 2000);
  };
  getQuestion() {
    console.log("getQuestion()", this.state);
    const cat = this.props.name.replace(":", "");
    console.log("CAT", cat);
    fetch(`${API_ENDPOINT}&category=${cat}&type=multiple`)
      .then(response => response.json())
      .then(json => {
        const questions = json.results;
        console.log("questions", questions);
        this.setState({
          answer: he.decode(questions[this.state.quiz_position].correct_answer),
          questions
        });
      });
  }
  handleCorrectAnswer = Transition => {
    console.log("Handle correct answer", this.state.num_correct);
    const currPos = this.state.quiz_position;
    console.log("Overflow?", this.state.num_correct <= 9);
    this.state.num_correct < 9
      ? this.setState({
          correct: true,
          quiz_position: currPos + 1,
          answer: he.decode(
            this.state.questions[this.state.quiz_position + 1].correct_answer
          ),
          open: true,
          TransitionDown,
          num_correct: this.state.num_correct + 1,
          correct_open: true,
          Transition
        })
      : this.setState({
          correct: true,
          open: true,
          num_correct: this.state.num_correct + 1,
          correct_open: true,
          TransitionDown
        });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleAnswerChosen = answer => {
    console.log("position", this.state.quiz_position);
    console.log("correct answer", this.state.answer);
    console.log("chosen answer", answer);

    answer === this.state.answer
      ? this.handleCorrectAnswer(TransitionDown)
      : alert("incorrect", this.state.answer, answer);
  };

  render() {
    const { classes } = this.props;
    console.log("QUIZ", this.props.name);
    return (
      <div>
        {this.state.questions && this.state.num_correct <= 9 && (
          <QuizQuestion
            transDown={TransitionDown}
            handleAnswerChosen={this.handleAnswerChosen}
            questions={this.state.questions}
            question_number={this.state.quiz_position}
            // className={classes.quizQuestion}
          />
        )}
        {this.state.num_correct > 9 && (
          <Grid container justify="center">
            <Typography variant="h1" style={{ marginTop: "15px" }}>
              You won!
            </Typography>
            <Button onClick={this.resetQuiz()}>New Questions?</Button>
          </Grid>
        )}
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.state.Transition}
          message={<span>Correct!</span>}
          autoHideDuration={1000}
        />
        <hr style={{ margin: "50px" }} />
        <Score num_correct={this.state.num_correct} name />
      </div>
    );
  }
}
// export default withStyles(styles)(Quiz);
export default Quiz;
