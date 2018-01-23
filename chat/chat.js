function listenChat(io) {
  const nsp = io.of('/chat');
  nsp.on('connection', () => {
    console.log('someone connected to chat!');
    nsp.emit('hi', 'chat!');
  });
}

module.exports = listenChat;
