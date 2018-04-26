import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import Reducers from './reducers/Reducers';
import App from "./components/App";
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();






