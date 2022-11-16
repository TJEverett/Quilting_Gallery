import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Account from "./Account";

function App() {
  return(
    <BrowserRouter>
      <NavigationBar />
      <div style={{height: "90px", width: "100vw"}}>
        <p>test</p>
      </div>
      <Switch>
        <Route path="/account">
          <Account />
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