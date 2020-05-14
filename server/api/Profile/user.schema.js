const mongoose = require('mongoose');
const joi = require('joi');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  // groupIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'group' }],
  // verified: { type: Boolean, default: true },
  // token: String
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.statics.validate = function (user) {
  const schema = {
    username: joi.string().min(4).max(25).required(),
    password: joi.string().min(5).max(255).required(),
    email: joi.string().email().min(5).max(255).required(),
    verification: joi.any().valid(joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
  };
  return joi.validate(user, schema);
};

userSchema.methods.isCorrectPassword = function (password, callback) {
  return bcrypt.compare(password, this.password, callback);
};

module.exports = mongoose.model('users', userSchema);