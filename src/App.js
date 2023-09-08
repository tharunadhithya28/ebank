import {Switch, Route} from 'react-router-dom'
import Login from './Components/Login'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
  </Switch>
)

export default App
