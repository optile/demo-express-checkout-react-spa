import React from "react";
import ExpressCheckout from "express-checkout";


import getAttributes from "../configuration";


const getMode = () => {
    let params = new URLSearchParams(window.location.search);

    return params.get("mode");
};
const getLongId = () => {
    let params = new URLSearchParams(window.location.search);

    return params.get("longId");
};
function Checkout() {

  const attributes = getAttributes();
  const mode = getMode();
  const longId = getLongId();


   return (
    <ExpressCheckout {...attributes} mode={mode} longId={longId} />
   )
   
 }
 export default Checkout;