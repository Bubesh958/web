import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./Home/Home";
import Leetcode from "./Home/Leetcode";
import Algorithms from "./Home/Algorithms";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Leetcode" component={Leetcode}></Route>
          <Route path="/Algorithms" component={Algorithms}></Route>
          <Route path="/Home" component={Home}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
