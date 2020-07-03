import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { Summary } from "./components/Summary";
import { Counter } from "./features/counter/Counter";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <header className="App-header">
          <Counter />
        </header>

        <Switch>
          <Route path="/quiz" component={Quiz} />
          <Route path="/summary" component={Summary} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
