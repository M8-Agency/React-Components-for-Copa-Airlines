import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";

import "./utils/Typography";
import Header from "./components/header";
import Examples from "./components/examples";
import Footer from "./components/footer";

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

          <h3>Extending</h3>
          <p>
            Lorem ipsum dolor sit amet, aliquip invenire cu nam, ex accumsan
            dignissim delicatissimi pro. Ad mei quis errem. Ei usu cibo
            evertitur, ex nemore doctus probatus mei. Te vix affert tamquam
            disputando, at blandit repudiare vim, ut minimum percipitur has.
          </p>

          <h3>Collaboration</h3>
          <p>
            Erat meis mel no, at eum cibo porro erant. At ius inani dolor
            nostrum. In est quaeque eligendi suavitate. Cu periculis constituto
            interpretaris est, regione vivendo cum te, melius audire pertinax ea
            ius. Mel quis dictas volutpat ne, pro nisl reque ubique id. Sed no
            facete putant fabellas, cum nisl debitis deseruisse te, no nam
            partem adipisci erroribus. Ei veniam prompta eripuit vis, te vel
            nobis noluisse indoctum.
          </p>

          <h3>Theming</h3>
          <p>
            Pri purto definitiones ex, te partiendo reformidans definitionem
            eam. Vel no propriae menandri, cetero animal deseruisse quo eu,
            sonet everti vivendo at vim. Pri unum facer ridens te. Idque
            lobortis disputando nam ex, pro te omnium inermis.
          </p>
        </main>

        <Footer />
      </StyledDemo>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
