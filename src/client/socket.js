var socket = io('http://localhost:3030');
socket.on('world.update', function (data) {
  // console.log(data);
  // console.log(data["1"]);

  boxBody.position[0] = data["0"];
  boxBody.position[1] = data["1"];
});
