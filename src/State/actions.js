import actionTypes from "./action-types";

export function registerUser(user) {
  return {
    type: actionTypes.REGISTER_USER,
    payload: user
  }
}

export function getExpenses(expenses) {
  return {
    type: actionTypes.GET_EXPENSES,
    payload: expenses
  }
}

export function getExpenseCategories(categories) {
  return {
    type: actionTypes.GET_EXPENSE_CATEGORIES,
    payload: categories
  }
}
