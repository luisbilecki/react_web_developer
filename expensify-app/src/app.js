import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ ExpenseDashboardPage } />
      <Route path="/create" component={ AddExpenseDashboardPage } />
      <Route path="/edit" component={ EditExpenseDashboardPage } />
      <Route path="/help" component={ HelpExpenseDashboardPage } />
      <Route component={ NotFoundPage } />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
