var express = require('express');
var socketio = require("socket.io");

var app = express.createServer(express.logger(), express.bodyParser());
app.use(app.router);
app.use(express.static(__dirname + '/public'));
app.listen(8000);

var puck = {
  x: 0,
  y: 0
}



var io = socketio.listen(app);
io.sockets.on('connection', function(socket) {
  socket.emit('init_data', { 
    my_id: socket.id, 
    a: 1, 
    b: 2 
  });

  socket.on('drag', function(point) {
    // do stuff in response to keystrokes
  });

  socket.on('disconnect', function(){
    // handle disconnections, remove users, etc
  });
});
