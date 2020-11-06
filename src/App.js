import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js'
import AddPage from './AddPage.js';
import Details from './Details.js'



export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <ListPage {...routerProps} />}
            />
            <Route
              path="/AddPage"
              exact
              render={(routerProps) =>
                <AddPage {...routerProps} />}
            />
            <Route
              path="/Details/:id"
              exact
              render={(routerProps) =>
                <Details {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}