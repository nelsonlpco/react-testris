import React from 'react';
import Display from 'components/display';
import { ThemeProvider } from 'styled-components';
import DarkTheme from 'style/theme/dark-theme';
import GlobalStyle from 'style';
import Game from 'scenes/game';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Game />
    </ThemeProvider>
  );
}

export default App;
