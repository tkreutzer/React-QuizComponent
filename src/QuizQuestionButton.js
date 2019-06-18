import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import purple from "@material-ui/core/colors/deepPurple";
import orange from "@material-ui/core/colors/deepOrange";
import { bounce } from "react-animations";
import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const { classes } = jss
  .createStyleSheet({
    "@keyframes bounce": bounce,
    bounce: {
      animationName: "bounce",
      animationDuration: "1s"
    }
  })
  .attach();

export default ({ handleAnswerChosen, choice, answer, transDown }) => {
  const state = {
    choices: []
  };
  const colors = ["primary", "secondary", "primary", "secondary"];
  const choices = Object.values(choice);
  console.log("choices", choices);
  console.log("choice", choice);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} pt="3">
        <Grid container justify="center" spacing={5}>
          {choices.map(function(choice, index) {
            console.log(index);
            return (
              <Grid key={index} item>
                <Button
                  style={classes.bounce}
                  style={{ margin: "50px" }}
                  onClick={() => handleAnswerChosen(choice, transDown)}
                >
                  {choice}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
// class QuizQuestionButton extends Component {
//   state = {
//     choices: []
//   };

//   render() {
//     const purp = purple["A200"];
//     const ora = orange["A200"];
//     const colors = ["primary", "secondary", "primary", "secondary"];
//     const choices = Object.values(this.props);
//     console.log("props", choices[0][1]);
//     return (
//       <Grid container spacing={2}>
//         <Grid item xs={12} pt="3">
//           <Grid container justify="center" spacing={5}>
//             {choices[0].map(function(choice, index) {
//               console.log(index);
//               return (
//                 <Grid key={index} item>
//                   <Fab
//                     color={colors[index]}
//                     onClick={this.props.handleAnswerChosen(choice)}
//                   >
//                     {choice}
//                   </Fab>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </Grid>
//       </Grid>
//     );
//   }
// }
// export default QuizQuestionButton;
