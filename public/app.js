$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(Todos)
	.catch(function(err){
		console.log(err);
	});
	
	$('input').keypress(function(event){
		if (event.which == 13) {
			createTodos();
		}
	});

	$(".list").on("click", "li", function(){
		updateTodo($(this));
	})

	$('.list').on("click", "span", function(event){
		event.stopPropagation();
		deleteTodo($(this).parent());
	});	
});


function Todos (todos){
	todos.forEach(function(todo){
		addTodos(todo);
    });
};    

function createTodos (){
	var userInput = $("input").val();
	$.post("/api/todos", {name: userInput})
	.then(function(todo){
		$('input').val("");
		addTodos(todo);
	})
	.catch(function(err){
		console.log(err);
	})
}

function addTodos(todo){
	var newTodo = $('<li>'+ todo.name + '<span>X</span></li>');
	newTodo.data("id", todo._id);
	newTodo.data("completed", todo.completed);
	if (todo.completed) {
		newTodo.addClass('done');
	}
	$('.list').append(newTodo);
}

function deleteTodo(todo){
	var ClickedId = todo.data("id");
	var deleteUrl = "/api/todos/" + ClickedId;
	$.ajax({
		url: deleteUrl,
		method: "DELETE"
	})
	.then(function(data){
		todo.remove();
	})
};

function updateTodo(todo){
	var updateUrl = "/api/todos/" + todo.data("id");
	var isDone = !todo.data("completed");
	var updateTodo = {completed: isDone};
	$.ajax({
		method: "PUT",
		data: updateTodo,
		url: updateUrl
	})
	.then(function(updateTodos){
		todo.toggleClass("done");
	})
}