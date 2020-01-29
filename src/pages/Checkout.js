import React from "react";
import { useHistory } from "react-router-dom";
import ExpressCheckout from "express-checkout";

import getAttributes from "../configuration/spa";
import { getQueryStringFromObject } from "../utils";

function Checkout() {
  let history = useHistory();
  const attributes = getAttributes();

  const onProceed = ({ step, dispatch, preset }) => {
    if (step === "update") {
      const { parameters } = preset.redirect;
      history.push("/summary?" + getQueryStringFromObject(parameters));
    }
  };

  return (
    <ExpressCheckout
      configuration={attributes.configuration}
      createTransactionDetails={attributes.createTransactionDetails}
      customFunctions={{ onProceed }}
      mode={null}
      longId={null}
    />
  );
}
export default Checkout;
