var db = require('../models/index');

exports.getTodo = function(req, res){
	db.todo.find()
	.then(function(todos){
		res.json(todos);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.getTodoId = function(req, res){
	db.todo.findById(req.params.todoId)
	.then(function(foundTodos){
		res.json(foundTodos);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.createTodo = function(req, res){
	db.todo.create(req.body)
	.then(function(newTodos){
		res.status(201).json(newTodos);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.updateTodo = function(req, res){
	db.todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then(function(updateTodos){
		res.json(updateTodos);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.deleteTodo = function(req, res){
	db.todo.remove({_id: req.params.todoId})
	.then(function(){
		res.json({message: "we delete it"})
	})
	.catch(function(err){
		res.send(err);
	})
}