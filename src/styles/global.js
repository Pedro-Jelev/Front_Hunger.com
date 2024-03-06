import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    font-size:1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }

  body * {
    text-decoration: none;
    outline: none;
    border: none;
    border-width: 0;
    background: none;
    list-style: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  #root {
    height: 100vh;
  }
`;
