/*
 * Copyright(c) 2020-2021 Payoneer Germany GmbH.
 * https://www.payoneer.com
 *
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more information.
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BASEURL from "./pages/const";
import { Home, Checkout, Summary, Thankyou, Cancel } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Link to={BASEURL + "/"}>Home</Link>
      </div>
      <br />
      <br />
      <div align="center">
        <Switch>
          <Route path={BASEURL + "/checkout"}>
            <Checkout />
          </Route>
          <Route path={BASEURL + "/summary"}>
            <Summary />
          </Route>
          <Route path={BASEURL + "/thankyou"}>
            <Thankyou />
          </Route>
          <Route path={BASEURL + "/cancel"}>
            <Cancel />
          </Route>
          <Route path={BASEURL + "/"}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
