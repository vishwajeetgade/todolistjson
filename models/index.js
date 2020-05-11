var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/todo-list");

mongoose.Promise = Promise;

module.exports.todo = require('./todo');