import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Table from './containers/Table';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Table} />
  </Route>
);
