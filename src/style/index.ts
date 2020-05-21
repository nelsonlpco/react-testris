import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.defaultBackground};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lightText};
    display: flex;
    flex: 1;
    flex-direction: row;
    min-height: 100vh;
    overflow: hidden;
  }
`;

export default GlobalStyle;
