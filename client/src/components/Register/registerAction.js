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
        if (response.data.error) {
          alert(response.data.error);
        } else if (response.data.id) {
          cb();
        }
      })
      .catch((error) => {
        console.log(error)
      })
  };
};

