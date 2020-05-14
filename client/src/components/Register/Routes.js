import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegisterPage from 'components/Register/Register';
import { matchPT, locationPT } from 'routes/PropTypes';
import { ROUTES } from 'config/constants';

const Login = ({ match, location }) => (
  <Switch>
    <Route path={match.path} exact component={RegisterPage} />
    <Redirect to={{ pathname: ROUTES.REGISTER, state: { from: location } }} />;
  </Switch>
);

Login.propTypes = {
  match: matchPT.isRequired,
  location: locationPT.isRequired,
};

export default Login;
