import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { injectGlobal } from 'styled-components'
import bg from './img/stardust.png'
import App from './screens/App.jsx'
import registerServiceWorker from './registerServiceWorker'

/* Global style */
injectGlobal([`
  body {
    font-family: 'Roboto', sans-serif;
    background: url(${bg});
    margin: 0;
  }
`])

/* Set mobx strict mode */
useStrict(true)

/* Render App */
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

/* Service worker (PWA) */
registerServiceWorker()
