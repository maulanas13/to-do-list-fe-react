import React from "react";
import "./App.css";
import { Login } from "./login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
