import React from "react";
import { useHistory } from "react-router-dom";
import ExpressCheckout from "express-checkout";
import BASEURL from "./const";
import getAttributes from "../configuration/spa";
import { getQueryStringFromObject } from "../utils";

function Checkout() {
  let history = useHistory();
  const attributes = getAttributes();

  const onProceed = ({ step, dispatch, preset }) => {
    if (step === "update") {
      const { parameters } = preset.redirect;
      history.push(
        BASEURL + "/summary?" + getQueryStringFromObject(parameters)
      );
    }
    if (step === "cancel") {
      const { parameters } = preset.redirect;
      history.push(
        BASEURL + "/checkout?" + getQueryStringFromObject(parameters)
      );
    }
  };
  const onAbort = ({ step, dispatch, preset }) => {
    const { parameters } = preset.redirect;
    history.push(BASEURL + "/checkout?" + getQueryStringFromObject(parameters));
  };

  // this is used when you click to close the pop up
  const onCustomerAbort = ({ step, dispatch, preset }) => {
    const { parameters } = preset.redirect;
    history.push(BASEURL + "/checkout?" + getQueryStringFromObject(parameters));
  };

  return (
    <ExpressCheckout
      configuration={attributes.configuration}
      createTransactionDetails={attributes.createTransactionDetails}
      customFunctions={{ onProceed, onAbort, onCustomerAbort }}
      mode={null}
      longId={null}
    />
  );
}
export default Checkout;
