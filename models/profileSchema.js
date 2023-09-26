const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true },
    allegiance: { type: String, require: true },
    rank: { type: String, require: true },
    gold: { type: Number, require: true },
    bank: { type: Number, require: true },
    citizens: { type: Number, require: true },
    growthRate: { type: Number, require: true },
    earnRate: { type: Number, require: true },
    taxRate: { type: Number, require: true },
    jobs: { type: Map, require: true },
    notifications: { type: Boolean, require: true },

    //Inventory

    inventory: { type: Map, require: true }

});

module.exports = mongoose.model('ProfileModels', profileSchema);