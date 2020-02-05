import React from "react";
import { withRouter } from "react-router";

function Cancel({location}) {
  return <div>Payment failed, please retry again!</div>;
}
export default withRouter(Cancel);
