import React from 'react'
import Standings from './Standings'
import Header from './Header'
import Home from './Home'
import Uitslagen from './Uitslagen'
import Recent from './Recent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/index.css'

function App() {

  return (

    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/uitslagen' component={Uitslagen} />
        <Route path='/recent' component={Recent} />
        <Route path='/standings' component={Standings} />
      </Switch>
    </Router>
  );
}

export default App;
