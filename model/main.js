const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mainsc = new Schema({
    title: String,
    colorcode: String,
    tagline: String,
});

const MAINSCHE = mongoose.model('maincategory', mainsc);

module.exports = MAINSCHE;