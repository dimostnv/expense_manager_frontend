import actionTypes from "./action-types";

const initialState = {
  user: '',
  expenses: [],
  categories: false
};

function expenseManager(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REGISTER_USER:
      return {...state, user: action.payload};
    case actionTypes.GET_EXPENSES:
      return {...state, expenses: action.payload};
    case actionTypes.PUSH_EXPENSE:
      return {...state, expenses: [...state.expenses, action.payload]};
    case actionTypes.GET_EXPENSE_CATEGORIES:
      return {...state, categories: action.payload};
    default:
      return state;
  }
}

export default expenseManager;