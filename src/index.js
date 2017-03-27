import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import RequireAuth from './components/require_auth';
import App from './components/app';
import Resources from './components/resources'
import reducers from './reducers';

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='resources' component={RequireAuth(Resources)} />
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
