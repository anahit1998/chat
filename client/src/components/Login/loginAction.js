import axios from 'axios';
import routes from 'config/route.config';

export const signIn = (user, cb) => {
  return (dispatch) => {
    return axios(
      {
        method: 'get',
        url: routes.BASE + routes.PROFILE + routes.SIGNIN,
        params: user
      })
      .then((response) => {
        console.log(response);
        cb();
      })
      .catch((error) => {
        console.log(error)
      })
  };
};

