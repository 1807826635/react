import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './other';

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Home/>
    </Switch>
  </HashRouter>
);

export default BasicRoute;