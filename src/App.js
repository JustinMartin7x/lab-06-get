import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js'
import AddPage from './AddPage';



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
          </Switch>
        </Router>
      </div>
    )
  }
}