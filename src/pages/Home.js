import React from "react";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>This is your shop!</h2>
      <img src="assets/demoshopusb.jpg" width="300"></img>
      <h2>Ledger Nano S: 20€</h2>
      <Button variant="contained">
        <Link to="/checkout">
          <strong>Go To Checkout Page</strong>
        </Link>
      </Button>
    </div>
  );
}
export default Home;
