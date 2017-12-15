import React, { Component } from "react";

import { BookingEngine, NewsletterSignup } from "../../../src/";

class Examples extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Examples</h2>
        <h3>Booking Engine</h3>
        <BookingEngine />
        <hr />

        <h3>Newsletter Signup</h3>
        <NewsletterSignup />
        <hr />
      </React.Fragment>
    );
  }
}

export default Examples;
