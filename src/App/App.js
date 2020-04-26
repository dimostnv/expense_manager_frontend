import React from 'react';
import {BrowserRouter, Link, NavLink, Route} from "react-router-dom";
import {connect, useSelector, useStore} from 'react-redux';

import Navigation from "../Navigation/Nav";
import Login from "../User/Login/Login";
import Register from "../User/Register/Register";

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

import cookieParser from "../utils/cookie-parser/cookie-parser";
import Greeter from "../Shared/Greeter/Greeter";
import ExpensesForm from "../Expenses/Add-expenses/Add-expenses";

function mapStateToProps(state) {
  return {
    user: state.user,
    expenses: state.expenses,
    categories: state.categories
  };
}

function App() {
  const [cookies, setCookies] = React.useState(cookieParser(document.cookie) || null);
  const [IsLogged, setIsLogged] = React.useState(cookies['auth_cookie'] || null);

  const user = useSelector(state => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        {IsLogged && <Navigation user={user} logout={setIsLogged} className="App-header"/>}
        {!IsLogged && <div className="App-header"/>}
        <main className="App-content">
          {!IsLogged &&
          <React.Fragment>
            <Route path="/" exact render={() =>
              <Login className="user-form" formType="login"
                     setLogin={{setIsLogged, setCookies}}/>}/>
            <Route path="/register" render={() =>
              <Register className="user-form" formType="register"
                        setLogin={{setIsLogged, setCookies}}/>}/>
          </React.Fragment>}
          {IsLogged &&
          <React.Fragment>
            <Route path="/" exact render={() => <Greeter user={user}/>}/>
            <Route path="/my-expenses" render={() => <h1>hi</h1>}/>
            <Route path="/add-expenses" render={() => <ExpensesForm/>}/>
          </React.Fragment>}
        </main>
      </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps)(App);