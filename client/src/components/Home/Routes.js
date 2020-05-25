import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from 'components/Home/Home';
import { matchPT, locationPT } from 'routes/PropTypes';
import { ROUTES } from 'config/constants';

const Home = ({ match, location }) => (
  <Switch>
    <Route path={match.path} exact component={Home} />
    <Redirect to={{ pathname: ROUTES.HOME, state: { from: location } }} />;
  </Switch>
);

Home.propTypes = {
  match: matchPT.isRequired,
  location: locationPT.isRequired,
};

export default Home;
