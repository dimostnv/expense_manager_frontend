const client = {
  getLogout: function() {
    return fetch("http://localhost:5000/users/logout", {
      method: 'GET',
      credentials: "include"
    }).then((res) => {
        return res.text();
      });
  },
  postLogin: function (userData) {
    return fetch("http://localhost:5000/users/login", {
      method: 'POST',
      body: JSON.stringify(userData),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then((userInfo) => {
      return userInfo.json();
    }).catch((err) => {
      return err.message;
    });
  },
  postRegister: function (userData) {
    return fetch("http://localhost:5000/users/register", {
      method: 'POST',
      body: JSON.stringify(userData),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then((userInfo) => {
      return userInfo.json();
    }).catch((err) => {
      return err.message();
    });
  },
  addExpense: function (expenseData) {
    return fetch("http://localhost:5000/expenses/add", {
      method: 'POST',
      body: JSON.stringify(expenseData),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then((expense) => {
      return expense.json();
    }).catch((err) => {
      return err.message;
    });
  }
};

export default client;