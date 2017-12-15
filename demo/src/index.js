import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";

import "./utils/Typography";
import Header from "./components/header";
import Examples from "./components/examples";
import Footer from "./components/footer";

import { BookingEngine, NewsletterSignup } from "../../src";

const StyledDemo = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

class Demo extends Component {
  render() {
    return (
      <StyledDemo>
        <Header />

        <main>
          <BookingEngine />

          <hr />
          <h2>NewsletterSignup</h2>
          <NewsletterSignup />
          <h2>Booking Engine</h2>

          <Examples />
        </main>

        <Footer />
      </StyledDemo>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
