import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'hey',
    description: 'August rent',
    note: 'This was the sixty rent payment in this year',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};