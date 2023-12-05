import React from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import SupplyCreateForm from "./SupplyCreateForm";

function SupplyRouter() {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact strict path={path} >
        <Redirect from={url} to={`${url}/all`} />
      </Route>
      <Route path={`${url}/all`} >
        <h2>All Supplies Route</h2>
      </Route>
      <Route path={`${url}/new`} >
        <SupplyCreateForm />
      </Route>
    </Switch>
  )
}

export default SupplyRouter;