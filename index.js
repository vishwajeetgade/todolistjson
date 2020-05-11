var express    = require("express"),
    app        = express(),
    bodyParser = require('body-parser'),
    todosRouts = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));


app.get("/", function(req, res){
	res.sendFile("index.html");
});



app.use("/api/todos", todosRouts);

app.listen(8081, function(){
	console.log("server started");
});
