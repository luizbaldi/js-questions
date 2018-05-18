import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Routes from '../config/routes.jsx'

const App = () => (
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>
)

export default App
