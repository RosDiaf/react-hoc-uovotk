import React, { Component } from 'react';
import { render } from 'react-dom';

// -- Components
import StockList from './Components/StockList';
import UserList from './Components/UserList';
import CompPage from './Components/Page';
import Hoc from './Components/HOC';

// -- Services
import getPages from './Services/DrupalPageService'

// -- Styles
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const data = getPages()

const StocksData = [
  {
      id: 1,
      name: 'TCS'
        
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
];

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
