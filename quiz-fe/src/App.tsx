import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { Summary } from "./components/Summary";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/quiz" component={Quiz} />
        <Route path="/summary" component={Summary} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
