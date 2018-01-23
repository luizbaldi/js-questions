import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'mobx-react';

/* Screens */
import InitialScreen from '../screens/Initial.jsx';
import QuestionsScreen from '../screens/Questions.jsx';

/* Stores */
import questionsStore from '../config/questionsStore';

const stores = { questionsStore };

const Routes = () => (
  <Provider {...stores}>
    <Router>
      <div> 
        <Route exact path='/' component={InitialScreen} />
        <Route exact path='/questions' component={QuestionsScreen} />
      </div>
    </Router>
  </Provider>
);

export default Routes;