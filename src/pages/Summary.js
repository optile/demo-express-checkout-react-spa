import React from "react";
import ExpressCheckout from "express-checkout";
import getAttributes from "../configuration";

const getLongId = () => {
    let params = new URLSearchParams(window.location.search);

    return params.get("longId");
};
function Summary() {

  const attributes = getAttributes();
  const longId = getLongId();


   return (
    <ExpressCheckout {...attributes} mode="Summary" longId={longId} />
   )
   
 }
 export default Summary;
