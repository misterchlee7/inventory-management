const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    shortID : String,
    name: String,
    description : String,
	image: String,
	status: String,
    purchase_price: String,
    sale_price: String,
    location: Array,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const model = mongoose.model('Item', schema);

module.exports = model;