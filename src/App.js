import React from 'react'
import Stand from './Stand'
import Header from './Header'
import Home from './Home'
import Uitslagen from './Uitslagen'
import Recent from './Recent'
import Footer from './Footer'
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
<<<<<<< HEAD

=======
      <Footer />
>>>>>>> 02410116021112e1f69d9a958b5300b616731c1a
    </Router>
  );
}

export default App;
