import React, { Component } from "react";
import { render } from "react-dom";

import { BookingEngine, NewsletterSignup } from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>copa-airlines-components Demo</h1>
        <BookingEngine />

        <hr />
        <h2>NewsletterSignup</h2>
        <NewsletterSignup />
        <h2>Booking Engine</h2>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
