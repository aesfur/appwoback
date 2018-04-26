import {DEFAULT_CONTACT} from "../constants/constants";

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];

export default function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        
        // authenticate
        if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
          // get parameters from post request
          let params = JSON.parse(opts.body);
          
          // find if any user matches login credentials
          let filteredUsers = users.filter(user => {
            return user.username === params.username && user.password === params.password;
          });
          
          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              username: user.username,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
              token: 'fake-jwt-token'
            };
            resolve({ok: true, json: () => responseJson});
          } else {
            // else return error
            reject('Username or password is incorrect');
          }
          
          return;
        }
        
        // register user
        if (url.endsWith('/users/register') && opts.method === 'POST') {
          // get new user object from post body
          let newUser = JSON.parse(opts.body);
          
          // validation
          let duplicateUser = users.filter(user => {
            return user.username === newUser.username;
          }).length;
          if (duplicateUser) {
            reject('Username "' + newUser.username + '" is already taken');
            return;
          }
          
          // save new user
          newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          
          // respond 200 OK
          resolve({ok: true, json: () => ({})});
          
          return;
        }
        
        // get initial contacts
        if (url.endsWith('/contacts/get') && opts.method === 'GET') {
          if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            let result = {result: DEFAULT_CONTACT};
            resolve({ok: true, json: () => result});
          } else {
            reject('Unauthorised');
          }
          return;
        }
        
        // pass through any requests not handled above
        realFetch(url, opts).then(response => resolve(response));
        
      }, 200);
    });
  }
}