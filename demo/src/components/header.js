import React, { Component } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: #0060a9;
  color: white;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    li {
      padding: 0.4rem;
      margin: 0;

      a {
        color: white;
        &:hover {
          background: black;
        }
      }
    }
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 0.2rem;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div className="wrapper">
          <ul>
            <li>
              <a href="#" rel="noreferrer noopener" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" rel="noreferrer noopener" target="_blank">
                Storybook
              </a>
            </li>
          </ul>

          <h1>React Components</h1>
          <h2>for Copa Airlines websites</h2>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
