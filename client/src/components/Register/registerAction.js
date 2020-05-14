import axios from 'axios';
import routes from 'config/route.config';

export const signUp = (user, cb) => {
  return (dispatch) => {
    return axios(
      {
        method: 'post',
        url: routes.BASE + routes.PROFILE + routes.SIGNUP,
        data: user
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

