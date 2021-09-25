import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import Projects from "./Pages/Projects";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <Switch>
      <Route path="/community">
        <Community />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
