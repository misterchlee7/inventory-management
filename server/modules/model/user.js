const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    first_name: String,
    last_name : String,
	email: String,
	password: String,
    organization: String,
    role: String
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const model = mongoose.model('User', schema);

module.exports = model;