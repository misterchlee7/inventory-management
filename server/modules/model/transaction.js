const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    user: Object,
    item : Object,
    quantity: Number,
	location: Array,
    type: String,
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const model = mongoose.model('Transaction', schema);

module.exports = model;