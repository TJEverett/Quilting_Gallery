import React from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import SupplyCreateForm from "./SupplyCreateForm";
import SupplyAllView from "./SupplyAllView";

function SupplyRouter() {
  let { path, url } = useRouteMatch();
  const supplyList = [
    {
      Name: "Purple Thread",
      Location: "Box 1",
      Description: "variegated",
      Comments: "bought from Sharon",
      ImageArray: [
        "https://picsum.photos/1200/900",
        "https://picsum.photos/900/1200"
      ],
      Stock: [
        {amount: 3, unit: "units"}
      ]
    },
    {
      Name: "Princess Fabric",
      Location: "Box 3",
      Description: "Belle, Cinderella, Aurora, Elsa, and Rapunzel",
      Comments: "bought @ the J-store",
      ImageArray: [
        "https://picsum.photos/1200/900",
        "https://picsum.photos/900/1200"
      ],
      Stock: [
        {amount: 2.33, unit: "yard"}
      ]
    },
    {
      Name: "Turtle Fabric",
      Location: "Box 2",
      Description: "colors are: blue-green, brown-green, and orange-brown",
      Comments: "bought on trip to canada",
      ImageArray: [
        "https://picsum.photos/900/1200",
        "https://picsum.photos/900/1200",
        "https://picsum.photos/900/1200"
      ],
      Stock: [
        {amount: 2, unit: "yard"},
        {amount: 2, unit: "yard"},
        {amount: 3, unit: "yard"}
      ]
    }
  ];

  return (
    <Switch>
      <Route exact strict path={path} >
        <Redirect from={url} to={`${url}/all`} />
      </Route>
      <Route path={`${url}/all`} >
        <SupplyAllView supplyArray={supplyList}/>
      </Route>
      <Route path={`${url}/new`} >
        <SupplyCreateForm />
      </Route>
    </Switch>
  )
}

export default SupplyRouter;