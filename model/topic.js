const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topic = new Schema({
    name: String,
    description: String,
    subcategory: { type: Schema.Types.ObjectId, ref: 'subcategoryop' },
    maincategory: { type: Schema.Types.ObjectId, ref: 'maincategory' },
});

const TOPICSCHE = mongoose.model('maintopic', topic);

module.exports = TOPICSCHE;