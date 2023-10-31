const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: String,
    lname: String,
    age: Number,
    email: String,
    password: String
});

const USER = mongoose.model('user', userSchema);

module.exports = USER;
