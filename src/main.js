var isPressing = false;
var key = null;
document.onkeydown = (event) => {
  if (isPressing) return;
  if (event.which < 37 || 40 < event.which) return;
  isPressing = true;
  key = event.which;
};
document.onkeyup = (event) => {
  if (key < 37 || 40 < key) return;
  let id = worker.game.tryMove(key);
  if (id) {
    worker.draw(key, id);
  }
  key = null
  isPressing = false;
};


var worker = null;
(function () {
  worker = new Worker();
})();