import React, { Component, Fragment } from "react";
import QuizQuestionButton from "./QuizQuestionButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import he from "he";

class QuizQuestion extends Component {
  shuffleAnswers = array => {
    var currIndex = array.length;
    var tempVal, randIndex;

    while (0 !== currIndex) {
      currIndex -= 1;

      tempVal = array[currIndex];
      array[randIndex] = tempVal;
      console.log(array);
    }
    return array;
  };
  compileAnswers = questions => {
    const choices = [];
    const corrAns = he.decode(
      this.props.questions[this.props.question_number].correct_answer
    );
    questions[this.props.question_number].incorrect_answers.forEach(element => {
      choices.push(he.decode(element));
    });
    choices.push(corrAns);
    return choices;
  };
  render() {
    const {
      handleAnswerChosen,
      questions, //FROM API
      question_number,
      transDown
    } = this.props;
    const allAnswers = this.compileAnswers(questions);
    return (
      <Fragment>
        <Grid justify="center">
          <Typography
            className={this.props.className}
            align="center"
            variant="h3"
          >
            {he.decode(questions[question_number].question)}
          </Typography>
        </Grid>
        <QuizQuestionButton
          transDown={transDown}
          choice={allAnswers}
          answer={questions[question_number].correct_answer}
          handleAnswerChosen={handleAnswerChosen}
        />
      </Fragment>
    );
  }
}
export default QuizQuestion;
