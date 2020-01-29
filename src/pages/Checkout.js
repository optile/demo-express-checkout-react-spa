import React from "react";
import ExpressCheckout from "express-checkout";

import getAttributes from "../configuration/spa";

function Checkout() {
  const attributes = getAttributes();

  return <ExpressCheckout {...attributes} mode={null} longId={null} />;
}
export default Checkout;
