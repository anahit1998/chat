const User = require('./user.schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (req, response) => {
  const user = req.body;
  const newUser = new User({
    username: user.username,
    password: user.password,
    verification: user.verification,
    email: user.email,
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
  const user = req.query;
  User.findOne({ 'username': user.username }, (err, res) => {
    if (res.password) {
      bcrypt.compare(user.password, res.password).then((isMatch) => {
        console.log(isMatch, ' ================================');
        if (isMatch) {
          const payload = {
            id: res._id,
            name: res.username
          };
          jwt.sign(
            payload,
            'secret',
            {
              expiresIn: 86400
            },
            (err, token) => {
              console.log(token, " zzzzzzzzzzzzzzzzzzzzzzz")
              User.updateOne({ username: user.username }, { token }, [], (err, row) => {
                console.log(err, row, 'updated +++++++++++++++');
              });
              response.json({
                success: true,
                token: token
              });
            }
          );

        } else {
          return response
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    } else {
      return response
        .status(404)
        .json({ error: 'username' + user.username + 'is not found' });
    }
    console.log(err, res, 'findeOne');
  })
  console.log('login', req.query);

};

module.exports = {
  signUp,
  signIn
};