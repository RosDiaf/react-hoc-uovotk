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

import Wrapper from './RenderProps/Wrapper';

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
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link to="/page" class="nav-link">HOC</Link>
                </li>
                <li class="nav-item">
                  <Link to="/wrapper" class="nav-link">Render Props</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/page">
              <Page />
            </Route>
            <Route path="/wrapper">
              <Wrapper />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'));
