import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpenseDashboardPage = () => (
  <div>
    This is from my dashboard add expense component
  </div>
);

const EditExpenseDashboardPage = () => (
  <div>
    This is from my dashboard edit expense component
  </div>
);

const HelpExpenseDashboardPage = () => (
  <div>
    This is from my dashboard help expense component
  </div>
);

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify!</h1>
    <div className="menu">
      <NavLink exact to="/" activeClassName="is-active">Dash</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={ ExpenseDashboardPage } />
        <Route path="/create" component={ AddExpenseDashboardPage } />
        <Route path="/edit" component={ EditExpenseDashboardPage } />
        <Route path="/help" component={ HelpExpenseDashboardPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
