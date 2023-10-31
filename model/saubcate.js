const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subcateg = new Schema({
    Name: String,
    maincategory: String,
});

const SUBCATE = mongoose.model ('subcategoryop', subcateg)

module.exports = SUBCATE;