import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from 'config/constants';
import RegisterRoutes from 'components/Register/Routes';
import LoginRoutes from 'components/Login/Routes';
import Home from 'components/Home/Home';

export const Routes = () => (
  <Router>
    <Switch>
      <Route
        path={ROUTES.LOGIN}
        component={LoginRoutes}
      />
      <Route
        path={ROUTES.REGISTER}
        component={RegisterRoutes}
      />
      <Route
        path={ROUTES.HOME}
        component={Home}
      />
    </Switch>
  </Router>
);

export default Routes;
