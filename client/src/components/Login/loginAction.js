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
        if(response.data.token){
          localStorage.setItem('token', response.data.token);
          cb();
        } else if(response.error) {
          alert(response.error);
        }
      })
      .catch((error) => {
        console.log(error)
      })
  };
};

