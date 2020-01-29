import React from "react";
import { Cancel } from "../../pages";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
function onProceed(params) {
  console.log("I am in onproceed");
  var data = params.preset;
  var dispatch = params.dispatch;
  var step = params.step;
  if (step === "update") {
    return history.push("/cancel");
    //We are in the stage when we need to be redirected to Summary
    // in Non single page app, the browser will make complete redirect to the url returned
    // we should use react route to change url without reloading the page and still pass all the query string
  }
}
export default onProceed;
