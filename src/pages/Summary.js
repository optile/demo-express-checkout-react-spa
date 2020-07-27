import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ExpressCheckout from "express-checkout";
import BASEURL from "./const";
import getAttributes from "../configuration/spa";
import { getQueryStringFromObject, getLongId } from "../utils";
import { getExpressPreset } from "../server/getExpressPreset";
import "./Summary.css";

function Summary() {
    let history = useHistory();
    const attributes = getAttributes();
    const [paymentData, setPaymentData] = useState({});

    const onProceed = ({ step, dispatch, preset }) => {
        if (step === "confirm") {
            const { parameters } = preset.redirect;
            history.push(BASEURL + "/thankyou?" + getQueryStringFromObject(parameters));
        }
    };
    const onAbort = ({ step, dispatch, preset }) => {
        if (step === "confirm") {
            const { parameters } = preset.redirect;
            history.push(BASEURL + "/cancel?" + getQueryStringFromObject(parameters));
        }
    };
    const longId = getLongId();
    useEffect(() => {
        getExpressPreset(setPaymentData, true);
    }, []);
    const address = paymentData?.address;
    const name = paymentData?.address?.name;
    const network = paymentData?.network;

    return (
        <div className="summaryContainer">
            <div className="detailsContainer">
                {!!address && (
                    <div className="details">
                        <div className="label">Shipping Address:</div>
                        <div>{`${name?.firstName} ${name?.lastName}`}</div>
                        <div>{address?.street}</div>
                        <div>{`${address?.city} ${address?.country}`}</div>
                        <div>{address?.zip}</div>
                    </div>
                )}
                {!!network && (
                    <div className="details">
                        <div className="label">Billing Information:</div>
                        {paymentData?.network}
                    </div>
                )}
            </div>
            <ExpressCheckout {...attributes} mode="Summary" longId={longId} customFunctions={{ onProceed, onAbort }} />
        </div>
    );
}

export default Summary;
