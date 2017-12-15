import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";

import "./utils/Typography";
import Header from "./components/header";
import Examples from "./components/examples";
import Footer from "./components/footer";

import { BookingEngine, NewsletterSignup } from "../../src";

const StyledDemo = styled.div`
  .wrapper {
    max-width: 1024px;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  code {
    padding: 0.5rem;
    background: #eaeaea;
    border-radius: 0.2rem;
  }
`;

class Demo extends Component {
  render() {
    return (
      <StyledDemo>
        <Header />

        <main className="wrapper">
          <p>
            This project includes full-featured responseive Booking Engine and a
            Newsletter Signup React components.
          </p>

          <h2>Getting started</h2>

          <h3>Installation</h3>
          <p>
            To download copa-airlines-components run{" "}
            <code>npm install copa-airlines-components</code>. And that's it!
            You are now ready to use these components in your React app.
          </p>
          <hr />
          <Examples />
        </main>

        <Footer />
      </StyledDemo>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
