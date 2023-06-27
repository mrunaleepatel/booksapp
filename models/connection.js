require('dotenv').config();
const mongoose = require('mongoose');
const { connected } = require('process');

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection
// .on('error', (error) => console.log(error.message))
// .on('connected', () => console.log('connected'))
// .on('disconnected', () => console.log('disconnected'))

module.exports = mongoose

