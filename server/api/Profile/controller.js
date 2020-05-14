const User = require('./user.schema');

const signUpPost = async (req, res) => {
  const user = req.body;
  console.log(user,'user');
  const newUser = new User({
      username: user.username,
      password: user.password,
      verification: user.verification,
      email: user.email
  });
  const isValid = newUser.validate(user).then(
    console.log('seccess')
  )
  .catch((err) => {
    console.log('catch error', err);
  });

  console.log('isValid', isValid);
  if (isValid.error) {
      console.log('validation error', isValid.error);
  }
  try {
      let savedUser = await newUser.save();
  } catch (err) {
    console.log('save user error', err);
  }
};

module.exports = {
  signUpPost
};