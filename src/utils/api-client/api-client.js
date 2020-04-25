const client = {
  postLogin: function (userData) {
    return fetch("http://localhost:5000/users/login", {
      method: 'POST',
      body: JSON.stringify(userData),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then((userInfo) => {
      console.log(userInfo);
      return userInfo.json();
    }).catch((err) => {
      return err.message();
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
  }
};

export default client;