import React from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import ProjectCreateForm from "./ProjectCreateForm";
import ProjectAllView from "./ProjectAllView";

function ProjectRouter() {
  let { path, url } = useRouteMatch();
  const ProjectList = [
    {
      Name: "Log Cabin",
      Location: "Done",
      Comments: "",
      Recipient: "sold",
      ImageArray: [
        "https://picsum.photos/1200/900"
      ],
      ProjectCategory: "complete",
      ProjectDate: "Fri, 31 Dec 2021",
      ProjectPercentage: 100
    },
    {
      Name: "Log Cabin",
      Location: "Box 1",
      Comments: "",
      Recipient: "Mike",
      ImageArray: [
        "https://picsum.photos/900/900"
      ],
      ProjectCategory: "current",
      ProjectDate: "Wed, 28 Feb 2024",
      ProjectPercentage: 90
    },
    {
      Name: "Box Illusion",
      Location: "Pattern",
      Comments: "need to pick fabric",
      Recipient: "",
      ImageArray: [],
      ProjectCategory: "pending",
      ProjectDate: "Sat, 01 Jan 2050",
      ProjectPercentage: 0
    },
    {
      Name: "Round Robin",
      Location: "Box 2",
      Comments: "From 2021",
      Recipient: "",
      ImageArray: [
        "https://picsum.photos/800/1000"
      ],
      ProjectCategory: "current",
      ProjectDate: "Tue, 27 Feb 2024",
      ProjectPercentage: 75
    },
    {
      Name: "Beginner Quilt",
      Location: "Done",
      Comments: "no picture of finished project, need to add a picture of pattern",
      Recipient: "Barb",
      ImageArray: [],
      ProjectCategory: "complete",
      ProjectDate: "Tue, 01 Jan 2019",
      ProjectPercentage: 50
    }
  ]

  return(
    <Switch>
      <Route exact strict path={path} >
        <Redirect from={url} to={`${url}/all`} />
      </Route>
      <Route path={`${url}/all`} >
        <ProjectAllView projectArray={ProjectList}/>
      </Route>
      <Route path={`${url}/done`} >
        <h2>Done Route</h2>
      </Route>
      <Route path={`${url}/now`} >
        <h2>Now Route</h2>
      </Route>
      <Route path={`${url}/soon`} >
        <h2>Soon Route</h2>
      </Route>
      <Route path={`${url}/new`} >
        <ProjectCreateForm />
      </Route>
    </Switch>
  )
}

export default ProjectRouter;