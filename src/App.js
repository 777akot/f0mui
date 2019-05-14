import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Routes from './routes'

const theme = createMuiTheme({
  palette: {

    secondary: {
      main: '#212121',
      contrastText: '#ffffff'
    },
    primary: {
      main: '#5327b2',
      contrastText: '#ffffff',

    },
    error: {
      main: '#d8a200',
      contrastText: '#ffffff'
    },
    text: {
      primary: "#212121",
      secondary: "#fffff"
    }
  },

  typography: {
    useNextVariants: true,
    display1: {
      color: "#ffffff"
    },
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
