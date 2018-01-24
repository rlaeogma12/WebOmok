var socket = io();
socket.emit('join', socket.id);
