import React from 'react';
import {BrowserRouter, Link, NavLink, Route} from "react-router-dom";

import Navigation from "../Navigation/Nav";
import Login from "../User/Login/Login";
import Register from "../User/Register/Register";

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

import cookieParser from "../utils/cookie-parser/cookie-parser";

function App(props) {
  console.log(props);
  const [cookies, setCookies] = React.useState(cookieParser(document.cookie) || null);
  const [IsLogged, setIsLogged] = React.useState(cookies['auth_cookie'] || null);

  return (
    <div className="App">
      {IsLogged && <Navigation className="App-header"/>}
      {!IsLogged && <div className="App-header"/>}
      <main className="App-content">
        <BrowserRouter>
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
            <Route path="/" exact render={() => <h1>Welcome, Dimo</h1>}/>
          </React.Fragment>
          }
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
