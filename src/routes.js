import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './home/components/Layout';
import Home from './home/components/Home';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
  </Route>
);
