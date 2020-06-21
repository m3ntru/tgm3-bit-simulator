import React from 'react';
import './App.css';
import MainConverter from './Components/MainConverter';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';

const tgm3Theme = createMuiTheme({
  typography:  {
    fontFamily: 'Noto Sans TC,sans-serif',
  },
});

function App() {
  return (
    <MuiThemeProvider theme={tgm3Theme}>
      <div className="App">
        <header className="App-header">
        </header>
        <MainConverter/>  
        <Fab size="medium" aria-label="GitHub" href="https://github.com/m3ntru/tgm3-bit-simulator" target='blank' style={{ marginBottom : '15px' }}>
          <GitHubIcon/>
        </Fab>     
      </div>
    </MuiThemeProvider>
  );
}

export default App;
