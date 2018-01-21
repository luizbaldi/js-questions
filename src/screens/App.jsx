import React from 'react'
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './config/routes';

const App = () => (
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>
)

export default App