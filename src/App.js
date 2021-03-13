import React from 'react'
import Standings from './Standings'
import Header from './Header'
import AllMatches from './AllMatches'
import Home from './Home'
import Uitslagen from './Uitslagen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/index.css'

function App() {

return (

    <Router basename="/eredivisie">
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/uitslagen' component={Uitslagen} />
        <Route path='/standings' component={Standings} />
        <Route path='/allmatches' component={AllMatches} />
      </Switch>
    </Router>
    );
}

export default App;
