require('./config/db');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const profile = require('./api/Profile/route');
const User = require('./api/Profile/user.schema');

app.use('/user', profile);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
