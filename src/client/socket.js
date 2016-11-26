var socket = io('http://localhost:3030');
socket.on('world.update', function (data) {
  // console.log(data);
  console.log(data["1"]);
});
