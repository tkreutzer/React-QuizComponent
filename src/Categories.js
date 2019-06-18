import React, { Fragment } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Menu, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const { classes } = jss
  .createStyleSheet({
    dropDown: {},
    select: {
      margin: {
        top: 50
      },
      width: 450
    }
  })
  .attach();

const categories = [
  { value: "9", category: "General Knowledge" },
  { value: "10", category: "Entertainment: Books" },
  { value: "11", category: "Entertainment: Film" },
  { value: "12", category: "Entertainment: Music" },
  { value: "13", category: "Entertainment: Musicals & Theatres" },
  { value: "14", category: "Entertainment: Television" },
  { value: "15", category: "Entertainment: Video Games" },
  { value: "16", category: "Entertainment: Board Games" },
  { value: "17", category: "Science & Nature" },
  { value: "18", category: "Science: Computers" },
  { value: "19", category: "Science: Mathematics" },
  { value: "20", category: "Mythology" },
  { value: "21", category: "Sports" },
  { value: "22", category: "Geography" },
  { value: "24", category: "History" },
  { value: "25", category: "Politics" },
  { value: "26", category: "Art" },
  { value: "27", category: "Celebrities" },
  { value: "28", category: "Animals" },
  { value: "29", category: "Vehicles" },
  { value: "30", category: "Entertainment: Comics" },
  { value: "31", category: "Science: Gadgets" }
];
const Categories = ({
  handleCategorySelected,
  catSelected,
  handleGo,
  typeSelected,
  handleTypeSelected
}) => {
  console.log("TYPE SELECTED", typeSelected);
  return (
    <Fragment>
      {/* <Grid container justify="center">
        <FormControl className={classes.select}>
          <InputLabel htmlFor="type-simple">Quesion Type</InputLabel>
          <Select
            value={typeSelected}
            onChange={e => {
              handleTypeSelected(e.target.value);
            }}
          >
            <MenuItem value="0">Any</MenuItem>
            <MenuItem value="multiple">Multiple Choice</MenuItem>
            <MenuItem value="boolean">True / False</MenuItem>
          </Select>
        </FormControl>
      </Grid> */}
      <Grid container justify="center">
        <FormControl className={classes.select}>
          <InputLabel htmlFor="category-simple">Category</InputLabel>
          <Select
            value={catSelected}
            onChange={e => {
              handleCategorySelected(e.target.value);
            }}
          >
            <MenuItem value="0">None</MenuItem>
            {categories.map(function(cat, ind) {
              return (
                <MenuItem key={ind} value={cat.value}>
                  {cat.category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      {catSelected !== "0" && (
        <Button
          style={{ marginTop: 50 }}
          variant="contained"
          color="primary"
          onClick={handleGo}
        >
          Let's go!
        </Button>
      )}
    </Fragment>
  );
};
export default Categories;
