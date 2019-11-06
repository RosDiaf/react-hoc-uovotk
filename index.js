import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// -- Components
import StockList from './Components/StockList';
import UserList from './Components/UserList';
import CompPage from './Components/Page';
import Hoc from './Components/HOC';

import App from './RenderProps/App';

// -- Services
import getPages from './Services/DrupalPageService'

// -- Data
import { StocksData, UsersData } from './Data/mockData'

// -- Styles
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const data = getPages()

const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UsersData
);

const Page = Hoc(
  CompPage,
  data
)

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/page" className="nav-link">HOC</Link>
                </li>
                <li className="nav-item">
                  <Link to="/app" className="nav-link">Render Props</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/page">
              <Page />
            </Route>
            <Route path="/app">
              <App />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'));
