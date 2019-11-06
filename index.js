import React, { Component } from 'react';
import { render } from 'react-dom';

// -- Components
import StockList from './Components/StockList';
import UserList from './Components/UserList';
import CompPage from './Components/Page';
import Hoc from './Components/HOC';

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
      <div>
        {/*<Users></Users>
        <Stocks></Stocks>*/}
        <Page></Page>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
