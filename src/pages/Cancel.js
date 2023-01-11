/*
 * Copyright(c) 2020-2021 Payoneer Germany GmbH.
 * https://www.payoneer.com
 *
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more information.
 */

import React from "react";
import { withRouter } from "react-router";

function Cancel({ location }) {
    return <div>Payment failed, please retry again!</div>;
}
export default withRouter(Cancel);
