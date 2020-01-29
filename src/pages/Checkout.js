import React from "react";
import ExpressCheckout from "express-checkout";

import getAttributes from "../configuration/spa";
import { useHistory } from "react-router-dom";

function Checkout() {
  let history = useHistory();
  const attributes = getAttributes();

  const onProceed = ({ step }) => {
    if (step === "update") {
      history.push("/cancel");
    }
  };

  return (
    <ExpressCheckout
      {...attributes}
      customFunctions={{ onProceed }}
      mode={null}
      longId={null}
    />
  );
}
export default Checkout;
