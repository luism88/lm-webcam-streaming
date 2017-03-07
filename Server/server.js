var express = require ("express");
var app = new express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var Log = require ("log"),
	log = new Log("debug");

var port = process.env.PORT || 3000;

/*
app.use(express.static(__dirname + "/public"));

app.get('/',function(req,res){
	res.redirect('index.html');
});
*/
		
io.on('connection',function(socket){
	log.info("A client has connected");
	socket.on('stream-emit',function(image){
		socket.broadcast.emit('stream-broadcast',image);
	})
})

http.listen(port,function(){
	log.info("Server listening on port 20 %s",port)

});

