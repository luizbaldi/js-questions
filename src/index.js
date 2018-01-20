import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { injectGlobal } from 'styled-components';
import bg from './img/stardust.png';

/* Global style */
injectGlobal([`
  body {
    font-family: 'Roboto', sans-serif;
    background: url(${bg});
    margin: 0;
  }
`]);

/* Render App */
ReactDOM.render(
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>, 
  document.getElementById('root')
);

/* Service worker (PWA) */
registerServiceWorker();
