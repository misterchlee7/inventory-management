const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    description : String,
	admin: Object,
	logo: String
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const model = mongoose.model('Organization', schema);

module.exports = model;