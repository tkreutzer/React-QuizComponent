import React, { Component } from "react";
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
  render() {
    return (
      <div>
        <h1 className="QuizQuestion">
          {quizData.quiz_questions[0].instruction_text}
        </h1>
      </div>
    );
  }
}
export default Quiz;
