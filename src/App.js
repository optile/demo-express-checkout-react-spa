import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home, Checkout, Summary, Thankyou, Cancel } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/thankyou">
            <Thankyou />
          </Route>
          <Route path="/cancel">
            <Cancel />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
