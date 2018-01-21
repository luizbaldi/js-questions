import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

/* Screens */
import InitialScreen from '../screens/Initial.jsx';
import QuestionsScreen from '../screens/Questions.jsx';

const Routes = () => (
  <Router>
    <div> 
      <Route exact path='/' component={InitialScreen} />
      <Route exact path='/questions' component={QuestionsScreen} />
    </div>
  </Router>
);

export default Routes;