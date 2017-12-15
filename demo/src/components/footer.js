import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 2rem;
  padding: 2rem;
  background: #f01885;
  color: white;

  p {
    text-align: right;
    font-size: 0.8rem;
  }
  a {
    color: white;
    transition: all 0.6s;
    &: hover {
      background: black;
      color: white;
    }
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <div className="wrapper">
          <p>
            Developed with 🖤 by{" "}
            <a
              href="https://m8agency.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              M8
            </a>{" "}
            for{" "}
            <a
              href="https://www.copaair.com/es/web/us"
              rel="noreferrer noopener"
              target="_blank"
            >
              Copa Airlines
            </a>
          </p>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
