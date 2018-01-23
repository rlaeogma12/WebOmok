function listenDraw(io) {
  const nsp = io.of('/draw');
  nsp.on('connection', () => {
    console.log('someone connected to draw!');
    nsp.emit('hi', 'draw!');
  });
}

module.exports = listenDraw;
