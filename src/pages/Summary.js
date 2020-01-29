import React from "react";
import { useHistory } from "react-router-dom";
import ExpressCheckout from "express-checkout";
import getAttributes from "../configuration/spa";
import { getQueryStringFromObject } from "../utils";

const getLongId = () => {
  let params = new URLSearchParams(window.location.search);

  return params.get("longId");
};
function Summary() {
  let history = useHistory();
  const attributes = getAttributes();

  const onProceed = ({ step, dispatch, preset }) => {
    if (step === "confirm") {
      console.log(".....", step, dispatch, preset);
      const { parameters } = preset.redirect;
      const interactionCode = preset.interaction.code;
      history.push("/thankyou?" + getQueryStringFromObject(parameters));
    }
  };
  const onAbort = ({ step, dispatch, preset }) => {
    if (step === "confirm") {
      console.log(".....", step, dispatch, preset);
      const { parameters } = preset.redirect;
      history.push("/cancel?" + getQueryStringFromObject(parameters));
    }
  };
  const longId = getLongId();

  return (
    <ExpressCheckout
      {...attributes}
      mode="Summary"
      longId={longId}
      customFunctions={{ onProceed, onAbort }}
    />
  );
}
export default Summary;
