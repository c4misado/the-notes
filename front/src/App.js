import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Fretboard from './Fretboard';
import Suggestion from './Suggestion';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Fretboard">Fretboard</Link>
                </li>
                <li>
                  <Link to="/Suggestion">Suggest a scale!</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Fretboard">
                <Fretboard />
              </Route>
              <Route path="/Suggestion">
                <Suggestion />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

function Home() {
  return (
    <div>
      <h1>FretFinder</h1>
      <p>The place to find your notes.</p>
    </div>
  )
}


export default App;
