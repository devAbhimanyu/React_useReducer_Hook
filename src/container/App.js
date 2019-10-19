import React from "react";
import ToDoList from "../Component/TodoList/TodoList";
import Paper from "@material-ui/core/Paper";
import Header from "../Component/Header";
import NewItem from "../Component/NewItem";
import { Store } from "../store/Store";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "500px",
    padding: theme.spacing(3, 2),
    height: "500px",
    margin: "2rem auto"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Store>
      <Paper className={classes.paper}>
        <Header />
        <NewItem />
        <ToDoList></ToDoList>
      </Paper>
    </Store>
  );
};

export default App;
