const express = require('express');
const router = express.Router();
const { signUpPost } = require('./controller');

router.post('/signup', signUpPost);

module.exports = router;