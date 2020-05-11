var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/todos');

router.route("/")
	.get(helpers.getTodo)
	.post(helpers.createTodo)

router.route("/:todoId")
	.get(helpers.getTodoId)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo)





module.exports = router;

