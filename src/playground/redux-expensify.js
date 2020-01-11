import { createStore, combineRedusers } from 'redux';

const demoState = {
  expenses: [{
    id: ' dhzvhvhhdlhdv',
    description: ' Somthing about',
    note: 'This was the final payment for that address',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};