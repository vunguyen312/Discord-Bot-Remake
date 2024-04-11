const mongoose = require('mongoose');

const objectSchema = new mongoose.Schema({
    identifier: { type: String, require: true },
    data: { type: Object || Array, require: true }
});

module.exports = mongoose.model('ObjectModels', objectSchema);