var server = require('socket.io');
var p2 = require('p2');
var io = new server(3030);

var world, boxBody, planeBody;

function initWorld() {
  world = new p2.World();
  world.applyGravity = false;

  boxShape = new p2.Box({ width: 3, height: .5 });
  boxBody = new p2.Body({ mass:0.1, position:[0, 1], damping: .7, restitution: .8 });
  boxBody.addShape(boxShape);
  world.addBody(boxBody);

  planeShape = new p2.Plane();
  planeBody = new p2.Body();
  planeBody.addShape(planeShape);
  world.addBody(planeBody);
}

function applyForce(x, y, object) {
  var force = p2.vec2.fromValues(x, y);
  var xForce = p2.vec2.create();

  p2.vec2.scale(xForce, force, object.mass);
  p2.vec2.add(object.force, object.force, xForce);
}

io.on('connection', (socket) => {
  console.log('client connected');

  socket.on('player.input', (direction) => {
    console.log(direction);
    if (direction === 'u') {
      applyForce(0, 10, boxBody);
    }
    if (direction === 'd') {
      applyForce(0, -10, boxBody);
    }
    if (direction === 'l') {
      applyForce(-10, 0, boxBody);
    }
    if (direction === 'r') {
      applyForce(10, 0, boxBody);
    }
  });
});

initWorld();

function loop() {
  world.step(1 / 30);
  io.sockets.emit('world.update', boxBody.position);
  setTimeout(loop, 1000 / 30);
}

loop();
