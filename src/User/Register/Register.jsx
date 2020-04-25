import React from "react";

import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";

import "./Register.css";

import client from "../../utils/api-client/api-client";
import cookieParser from "../../utils/cookie-parser/cookie-parser";

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

  function submitForm(event) {
    event.preventDefault();

    const userData = {email, username, password};

    client.postRegister(userData).then((res) => {
      const cookies = cookieParser(document.cookie);
      const credentials = cookies['auth_cookie'];
      props.setLogin.setCookies(credentials);
      props.setLogin.setIsLogged(credentials);
      history.push('/');
    });

    //props.setLogin(true);
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
        <Button variant="light" type="submit" onClick={submitForm}>Register</Button><br/>
      </Form>
    </div>
  );
}

export default Register;