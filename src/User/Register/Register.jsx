import React from "react";

import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";

import "./Register.css";

import client from "../../utils/api-client/api-client";
import cookieParser from "../../utils/cookie-parser/cookie-parser";
import {getExpenses, registerUser} from "../../State/actions";

function mapDispatchToProps(dispatch) {
  return {
    submitForm: function (data) {
      dispatch(registerUser(data.username));
      dispatch(getExpenses(data.expenses));
    }
  }
}

function Register(props) {
  const history = useHistory();

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleInputChange(event) {
    event.preventDefault();

    const {name, value} = event.target;

    // eslint-disable-next-line default-case
    switch (name) {
      case 'username': setUsername(value); break;
      case 'email': setEmail(value); break;
      case 'password': setPassword(value); break;
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const userData = {email, username, password};

    client.postRegister(userData).then((data) => {
      const cookies = cookieParser(document.cookie);
      const credentials = cookies['auth_cookie'];
      props.setLogin.setCookies(credentials);
      props.setLogin.setIsLogged(credentials);
      props.submitForm(data);
      history.push('/');
    });
  }

  return (
    <div className="register">
      <h2>Register</h2>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Control type="text" name='username' placeholder="Username"
                        onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Control type="email" name='email' placeholder="Email"
                        onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control type="password" name='password' placeholder="Password"
                        onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="light" type="submit" onClick={handleFormSubmit}>Register</Button><br/>
      </Form>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Register);