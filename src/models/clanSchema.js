const mongoose = require('mongoose');

const clanSchema = new mongoose.Schema({
    clanName: { type: String, require: true, unique: true },
    leaderID: { type: String, require: true, unique: true },
    serverID: { type: String, require: true, unique: true },
    public: { type: Boolean, require: true },
    members: { type: Object, require: true },

    //Clan Resources

    deity: { type: Object },
    inventory: { type: Map }
});

module.exports = mongoose.model('ClanModels', clanSchema);