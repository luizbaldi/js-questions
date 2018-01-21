import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import bg from './img/stardust.png';
import App from './screens/App.jsx';
import store from './config/store';

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
  <App store={store} />, 
  document.getElementById('root')
);

/* Service worker (PWA) */
registerServiceWorker();
