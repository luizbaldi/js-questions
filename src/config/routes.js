import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Provider } from 'mobx-react'

/* Screens */
import InitialScreen from '../screens/Initial.jsx'
import QuestionsScreen from '../screens/Questions.jsx'
import FinishScreen from '../screens/Finish.jsx'

/* Stores */
import questionsStore from '../config/questionsStore'

const stores = { questionsStore }

const Routes = () => (
  <Provider {...stores}>
    <Router>
      <div>
        <Route exact path='/' component={InitialScreen} />
        <Route path='/questions' component={QuestionsScreen} />
        <Route path='/finish' component={FinishScreen} />
      </div>
    </Router>
  </Provider>
)

export default Routes
