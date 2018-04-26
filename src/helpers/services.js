export const services = {
  login,
  logout,
  register,
  getContacts
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  };
  
  return fetch('/users/authenticate', requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      
      return response.json();
    })
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }
      
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };
  
  return fetch('/users/register', requestOptions).then((response) => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      
      return response.json();
    }
  );
}

function getContacts() {
  
  let user = JSON.parse(localStorage.getItem('user'));
  let auth = {};
  if (user && user.token) {
    auth = {'Authorization': 'Bearer ' + user.token};
  }
  
  const requestOptions = {
    method: 'GET',
    headers: {...auth, 'Content-Type': 'application/json'}
  };
  
  return fetch('/contacts/get', requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(contacts => {
      return contacts;
    });
}