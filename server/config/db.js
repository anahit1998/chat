const config = require('../config/');
const mongoose = require('mongoose');
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

module.exports = () => { };