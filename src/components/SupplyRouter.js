import React from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";

function SupplyRouter() {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} >
        <Redirect from={url} to={`${url}/all`} />
      </Route>
      <Route path={`${url}/all`} >
        <h2>Done Supplies Route</h2>
      </Route>
      <Route path={`${url}/new`} >
        <h2>New Supplies Route</h2>
      </Route>
    </Switch>
  )
}

export default SupplyRouter;