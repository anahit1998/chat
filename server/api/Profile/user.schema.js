const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  token: {
    type: String,
    default: null
  }
});

userSchema.pre('save', async function (next) {
  const user = this;
  var password = user.password;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(password, 8);
  }
  console.log(user.password);
  bcrypt.compare(password, user.password).then((result) => {
  });
  password = await bcrypt.hash(password, 8);
  next();
});

userSchema.statics.validate = function (user, successCb, errCb) {
  const schema = Joi.object().keys({
    username: Joi.string().min(4).max(25).required(),
    password: Joi.string().min(5).max(255).required(),
    email: Joi.string().email().min(5).max(255).required(),
    verification: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
  });
  Joi.validate(user, schema, (err, value) => {
    if (err) {
      errCb(err);
    } else {
      successCb(value);
    }
  });
};

userSchema.methods.isCorrectPassword = function (password, callback) {
  return bcrypt.compare(password, this.password, callback);
};

module.exports = mongoose.model('User', userSchema);