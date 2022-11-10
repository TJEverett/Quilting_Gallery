import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function App() {
  return(
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/account">
          <h2>Account Path</h2>
        </Route>
        <Route path="/projects">
          <h2>Projects Path</h2>
        </Route>
        <Route path="/supplies">
          <h2>Supplies Path</h2>
        </Route>
        <Route path="/">
          <h2 style={{height: "300vh"}}>Default Path</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;