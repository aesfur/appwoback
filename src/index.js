import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from "./components/App";
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';
import configureFakeBackend from './helpers/fake-backend';
import {store} from "./helpers/store";


configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App}/>
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();






