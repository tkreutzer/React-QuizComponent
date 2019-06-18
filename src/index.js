import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Quiz from "./Quiz";
import registerServiceWorker from "./registerServiceWorker";
import { Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    {/* <Switch> */}
    <Route path="/" exact component={App} />
    <Route
      path="/trivia/:id"
      render={({ match }) => <Quiz name={match.params.id} />}
    />
    {/* </Switch> */}
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
