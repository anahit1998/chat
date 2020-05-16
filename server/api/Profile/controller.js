const User = require('./user.schema');

const signUp = async (req, response) => {
  const user = req.body;
  const newUser = new User({
    username: user.username,
    password: user.password,
    verification: user.verification,
    email: user.email
  });
  User.validate(user,
    () => {
      User.find({ 'username': user.username }, (err, res) => {
        if (err) {
          response.send({ 'error': 'err.details[0].message' });
          console.log(err);
        }
        else if (res.length) {
          response.send({ 'error': 'Your username alredy used!' })
        } else {
          newUser.save();
          response.send({ 'id': newUser._id });
        }
      }
      );
    },
    (err) => {
      response.send({ 'error': err.details[0].message });
      console.log(err);
    });
};

const signIn = async (req, response) => {
  console.log('login', req.query);

};

module.exports = {
  signUp,
  signIn
};