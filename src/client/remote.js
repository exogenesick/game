function doKeyDown(e) {
  // console.log(e.keyCode);

  if ( e.keyCode == 119 ) {
    socket.emit('player.input', 'up');
    // applyForce(0, 100, boxBody);
  }

  if ( e.keyCode == 97 ) {
    socket.emit('player.input', 'left');
    // applyForce(-100, 0, boxBody);
  }

  if ( e.keyCode == 100 ) {
      socket.emit('player.input', 'right');
      // applyForce(100, 0, boxBody);
  }

  if ( e.keyCode == 115 ) {
    socket.emit('player.input', 'down');
    // applyForce(0, -100, boxBody);
  }
}

window.addEventListener("keypress", doKeyDown, false);
