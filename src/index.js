import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import bg from './img/stardust.png';
import App from './screens/App.jsx';
import { useStrict } from 'mobx';

/* Global style */
injectGlobal([`
  body {
    font-family: 'Roboto', sans-serif;
    background: url(${bg});
    margin: 0;
  }
`]);

/* Set mobx strict mode */
useStrict(true);

/* Render App */
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

/* Service worker (PWA) */
registerServiceWorker();
