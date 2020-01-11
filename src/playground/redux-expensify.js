import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// ADD_EXPENSE

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});
// REMOVE_EXPENSE

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reduser

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
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



//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne =  store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
console.log(expenseOne);



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