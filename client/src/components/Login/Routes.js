import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from 'components/Login/Login';
import { matchPT, locationPT } from 'routes/PropTypes';
import { ROUTES } from 'config/constants';

const Login = ({ match, location }) => (
  <Switch>
    <Route path={match.path} exact component={LoginPage} />
    <Redirect to={{ pathname: ROUTES.LOGIN, state: { from: location } }} />;
  </Switch>
);

Login.propTypes = {
  match: matchPT.isRequired,
  location: locationPT.isRequired,
};

export default Login;
