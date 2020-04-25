import React from "react";

import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {registerUser, getExpenses, getExpenseCategories} from "../../State/actions";

import client from "../../utils/api-client/api-client";
import cookieParser from "../../utils/cookie-parser/cookie-parser";

import "./Login.css";

function mapDispatchToProps(dispatch) {
  return {
    submitForm: function (data) {
      dispatch(registerUser(data.username));
      dispatch(getExpenses(data.expenses));
    }
  }
}

function Login(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleInputChange(event) {
    event.preventDefault();
    const {name, value} = event.target;
    name === 'username' ? setUsername(value) : setPassword(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const userData = {username, password};
      client.postLogin(userData).then((data) => {
        const cookies = cookieParser(document.cookie);
        const credentials = cookies['auth_cookie'];
        props.setLogin.setCookies(credentials);
        props.setLogin.setIsLogged(credentials);
        props.submitForm(data);
      });
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Control name="username" type="text" placeholder="Username"
                        onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control name="password" type="password" placeholder="Password"
                        onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="light" type="submit" onClick={handleFormSubmit}>Login</Button><br/>
        <div className="register-redirect">
          <p>Not a user yet? <Link to="/register" className="reg-link">Register now</Link></p>
        </div>
      </Form>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Login);