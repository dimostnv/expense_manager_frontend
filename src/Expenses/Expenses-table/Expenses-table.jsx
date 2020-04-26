import React from "react";

import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";

import "./Expenses-table.css";

function ExpensesTable() {
  const expenses = useSelector(state => state.expenses);

  return (
    <div className="expenses-table">
      <Table responsive>
        <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        {expenses.map((expense) => {
          return (
            <tr>
              <td>{expense.title}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>)})}
        </tbody>
      </Table>
    </div>
  );
}

export default ExpensesTable;