/*
 * Copyright(c) 2020-2021 Payoneer Germany GmbH.
 * https://www.payoneer.com
 *
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more information.
 */

import React from "react";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import BASEURL from "./const";

function Home() {
    return (
        <div>
            <h2>My Single Page Shop</h2>
            <img src="assets/demoshopusb.jpg" width="300" alt="Ledger Nano S"></img>
            <h2>Ledger Nano S: 20€</h2>
            <Button variant="contained">
                <Link to={BASEURL + "/checkout"}>
                    <strong>Go To Checkout Page</strong>
                </Link>
            </Button>
        </div>
    );
}
export default Home;
