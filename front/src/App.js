import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Fretboard from './Fretboard';
import Suggestion from './Suggestion';
import Home from './Home';

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
                  <Home/>
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

export default App;