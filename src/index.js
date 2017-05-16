import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configStore from './store';
import routes from './routes';

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store} history={history}>
    <Router history={browserHistory} key={Math.random()} onUpdate={() => window.scrollTo(0, 0)}>
      {routes}
    </Router>
  </Provider>
), document.getElementById('app'));


if (process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    ReactDOM.render((
      <Provider store={store} history={history}>
        <Router history={browserHistory} key={Math.random()} onUpdate={() => window.scrollTo(0, 0)}>
          {newRoutes}
        </Router>
      </Provider>
    ), document.getElementById('app'));
  });
}
