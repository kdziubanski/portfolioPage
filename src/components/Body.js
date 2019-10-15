import React from "react";
import { Route, Switch } from "react-router-dom";
import Start from "../pages/Start";
import About from "../pages/About";
import Memory from "../pages/Memory";
import ToDo from "../pages/ToDo";

const Body = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/about" component={About} />
      <Route path="/toDo" component={ToDo} />
      <Route path="/memory" component={Memory} />
    </Switch>
  );
};

export default Body;
