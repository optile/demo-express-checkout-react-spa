/*
 * Copyright(c) 2020-2021 Payoneer Germany GmbH.
 * https://www.payoneer.com
 *
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more information.
 */

import React, { useState, useEffect } from "react";
import { getExpressPreset } from "../server/getExpressPreset";
import { charge } from "../server/charge";

const getTemplate = (status) => {
	switch (status) {
		case "CHARGED":
			return <div>Payment is successfull</div>;
		case "EXPIRED":
			return <div>The session is expired</div>;
		case "ERROR":
			return <div>Payment failed!</div>;
		default:
			return <div>Processing...</div>;
	}
};

const Thankyou = () => {
	const [status, setStatus] = useState("PROCESSING");
	const [link, setLink] = useState("");
	useEffect(() => {
		getExpressPreset(setLink);
	}, []);
	useEffect(() => {
		if (!link) return;
		if (link === "EXPIRED" || link === "ERROR") {
			setStatus(link);
		} else {
			charge(link, setStatus);
		}
	}, [link]);
	return <div>{getTemplate(status)}</div>;
};

export default Thankyou;
