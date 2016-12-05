document.body.innerHTML += '<button onclick="join(1);">Join RED</button>';
document.body.innerHTML += '<button onclick="join(2)">Join BLUE</button>';

var player;
var key = [];

function join(nr) {
  player = nr;
  console.log('You are player no. ' + nr);
}

// function doKeyDown(e) {
//   var playerLabel = 'player.input.' + player
//
//   if ( e.keyCode == 119 ) {
//     socket.emit('player.input', 'u');
//   }
//
//   if ( e.keyCode == 97 ) {
//     socket.emit('player.input', 'l');
//   }
//
//   if ( e.keyCode == 100 ) {
//       socket.emit('player.input', 'r');
//   }
//
//   if ( e.keyCode == 115 ) {
//     socket.emit('player.input', 'd');
//   }
// }

// (function loop() {
//   console.log('loop');
//     var y = 0, l = key.length, i, t;
//     for(i = 0; i < l; i ++){
//         if(key[i]){
//             console.log(key[i]);
//         }
//     }
//     setTimeout(loop, 1000 / 24);
// })();
//
// function keypress(e) {
//   var e = e || event;
//   key[e.keyCode] = e.type == 'keydown';
// }
//
// window.addEventListener("keypress", keypress, false);
// window.addEventListener("keydown", keypress, false);

var map = {65: false, 68: false, 87: false, 83: false};
$(document).keydown(function(e) {
  console.log(e.keyCode);
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[87]) {
          socket.emit('player.input', 'u');
        }
        if (map[83]) {
          socket.emit('player.input', 'd');
        }
        if (map[65]) {
            socket.emit('player.input', 'l');
        }
        if (map[68]) {
          socket.emit('player.input', 'r');
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});
