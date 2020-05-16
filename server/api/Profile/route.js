const express = require('express');
const router = express.Router();
const { signUp, signIn } = require('./controller');

router.route('/signup').post(signUp);
router.route('/signin').get(signIn);

module.exports = router;