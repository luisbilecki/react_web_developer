import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ ExpenseDashboardPage } />
      <Route exact path="/create" component={ AddExpenseDashboardPage } />
      <Route exact path="/edit" component={ EditExpenseDashboardPage } />
      <Route exact path="/help" component={ HelpExpenseDashboardPage } />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
