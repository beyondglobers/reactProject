const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

const stockSchema = new Schema({
	my_id: String,
	amount: Number,
	ventas: {
		type:Number,
		default: 0
	},
	category: String,
	desactualizar: String,
	lastModified: {
		type: Date,
		// `Date.now()` returns the current unix timestamp as a number
		default: Date.now()
	},
	name: String,
	photo_id: String
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

// Model
// const stock = mongoose.model('stock', stockSchema);

module.exports = stockSchema;

// module.exports = stock;