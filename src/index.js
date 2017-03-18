import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render((
  <Router key={Math.random()} onUpdate={() => window.scrollTo(0, 0)}>
    {routes}
  </Router>
), document.getElementById('app'));


if (process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    ReactDOM.render((
      <Router key={Math.random()} onUpdate={() => window.scrollTo(0, 0)}>
        {newRoutes}
      </Router>
    ), document.getElementById('app'));
  });
}
