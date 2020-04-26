import React from "react";

import {Card, Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useSelector, connect} from "react-redux";

import client from "../../utils/api-client/api-client";
import {pushExpense} from "../../State/actions";

import "./Add-expenses.css";

function mapDispatchToProps(dispatch) {
  return {
    updateExpenses: function (expense) {
      dispatch(pushExpense(expense));
    }
  }
}

function ExpensesForm(props) {
  const user = useSelector(state => state.user);
  const history = useHistory();

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [amount, setAmount] = React.useState(0);

  function handleInputChange(event) {
    event.preventDefault();
    const {name, value} = event.target;

    // eslint-disable-next-line default-case
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'amount':
        setAmount(value);
        break;
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const expenseData = {title, description, category, amount, user};

    client.addExpense(expenseData).then((expense) => {
      props.updateExpenses(expense);
      history.push('/');
    });
  }


  return (
    <div className='expenses-form'>
      <Card>
        <Card.Header>Add expense</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control name="title" type="text" placeholder="Title"
                            onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control name="description" type="text" placeholder="Description"
                            onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control as="select" name="category" value="Category"
                            onChange={handleInputChange}>
                <option>Category</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control name="amount" type="number" placeholder="Amount"
                            onChange={handleInputChange}/>
            </Form.Group>
            <Button variant="info" type="submit" onClick={handleFormSubmit}>Add</Button><br/>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(ExpensesForm);