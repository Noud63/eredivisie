import React from 'react'
import Stand from './Stand'
import Header from './Header'
import Home from './Home'
import Uitslagen from './Uitslagen'
import Recent from './Recent'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './styles/index.css'

function App() {

  return (

    <Router basename="/eredivisie">
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/uitslagen' component={Uitslagen} />
        <Route path='/recent' component={Recent} />
        <Route path='/stand' component={Stand} />
      </Switch>
    </Router>
  );
}

export default App;
