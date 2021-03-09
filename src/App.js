import Standings from './Standings'
import Header from './Header'
import AllMatches from './AllMatches'
import Home from './Home'
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
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/standings' component={Standings} />
          <Route path='/allmatches' component={AllMatches} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
