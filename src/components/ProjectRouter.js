import React from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";

function ProjectRouter() {
  let { path, url } = useRouteMatch();

  return(
    <Switch>
      <Route exact path={path} >
        <Redirect from={url} to={`${url}/all`} />
      </Route>
      <Route path={`${url}/all`} >
        <h2>Done Route</h2>
      </Route>
      <Route path={`${url}/done`} >
        <h2>All Route</h2>
      </Route>
      <Route path={`${url}/now`} >
        <h2>Now Route</h2>
      </Route>
      <Route path={`${url}/soon`} >
        <h2>Soon Route</h2>
      </Route>
      <Route path={`${url}/new`} >
        <h2>New Route</h2>
      </Route>
    </Switch>
  )
}

export default ProjectRouter;