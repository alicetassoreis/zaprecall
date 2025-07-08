import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FB6B6B;
    font-family: 'Recursive', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    font-family: 'Recursive', sans-serif;
    border: none;
    border-radius: 5px;
    padding: 6px 12px;
    cursor: pointer;
    font-size: 14px;
    color: white;
  }
`;

export default GlobalStyle;
