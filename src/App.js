import React from 'react';
import './App.css';
import MainConverter from './Components/MainConverter';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

const tgm3Theme = createMuiTheme({
  typography:  {
    fontFamily: '"Noto Sans CJK TC"',
  },
});

function App() {
  return (
    <MuiThemeProvider theme={tgm3Theme}>
      <div className="App">
        <header className="App-header">
        </header>
        <MainConverter/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
