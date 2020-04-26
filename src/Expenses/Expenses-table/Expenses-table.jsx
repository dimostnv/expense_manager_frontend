import React from "react";

import {Card, Table} from "react-bootstrap";
import {useSelector} from "react-redux";

import YearGroup from "../Year-group/Year-group";

import filterExpenses from "../../utils/expenses-filter/expenes-filter";

import "./Expenses-table.css";

function ExpensesTable() {
  let expenses;
  const allExpenses = useSelector(state => state.expenses);
  const filter = useSelector(state => state.expensesFilter);
  if (filter.year || filter.month) {
    const filteredExpenses = filterExpenses(allExpenses, filter);
    console.log(filteredExpenses);
    expenses = filteredExpenses || allExpenses;
  }

  return (
    <div className="expenses-table">
      <Card>
        <Card.Header>My expenses</Card.Header>
        <Card.Body>
          <YearGroup/>
          {!expenses && <h1>No expenses to show</h1>}
          {expenses && <Table responsive striped className="table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {expenses.map((expense, index) => {
              return (
                <tr key={index}>
                  <td>{expense.title}</td>
                  <td>{expense.description}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                </tr>)
            })}
            </tbody>
          </Table>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExpensesTable;