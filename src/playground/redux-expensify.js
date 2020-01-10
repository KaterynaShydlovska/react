import { createStore, combineReducers } from 'redux';
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reduser

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filterReducersDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filterReducersDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

//Filters Reduser
//text = '', sortBy => 'date', startDate => undefined, endDate => undefined


//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

console.log(store.getState());

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