import {Switch, Route} from 'react-router-dom'

import LandingPage from './components/LandingPage';
import Scheduler from './components/Scheduler'
import './App.css' 

const App = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/scheduler" component={Scheduler} />
  </Switch>
)

export default App