var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	name: {
		type: String,
		require: "name cannot be blank"
	},
	data: {
		type: Date,
		default: Date.now
	},
	completed: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model("todo", todoSchema);