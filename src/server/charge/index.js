/*
 * Copyright(c) 2020-2021 Payoneer Germany GmbH.
 * https://www.payoneer.com
 *
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more information.
 */

import { sendData } from "../network";
import { getAuthorization } from "../../utils";

export const charge = async (url, callback) => {
    const response = await sendData({
        url,
        method: "POST",
        body: {},
        headers: {
            Authorization: getAuthorization(),
        },
    });
    if (response?.data?.status?.code === "charged") {
        callback("CHARGED");
    } else callback("ERROR");
};
