import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Routes from './routes'
import { blue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {

    secondary: {
      main: '#212121',
      contrastText: '#ffffff'
    },
    primary: {
      main: '#700099',
      contrastText: '#ffffff',

    },
    text: {
      primary: "#212121",
      secondary: "#fffff"
    }
  },

  typography: {
    // Use the system font instead of the default Roboto font.
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
