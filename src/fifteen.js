class Fifteen {
  constructor() {
    this.initField = [];
    this.field = [];
    for (let y = 0; y < 4; y++) {
      this.initField[y] = [];
      for (let x = 0; x < 4; x++) {
        this.initField[y][x] = y * 4 + x + 1;
      }
    }
    this.initField[3][3] = "__";
    for (let y = 0; y < 4; y++) {
      this.field[y] = this.initField[y].concat();
    }
    this.keyArray = {
      "key37": new Vector2(1, 0),//left
      "key38": new Vector2(0, 1),//up
      "key39": new Vector2(-1, 0),//right
      "key40": new Vector2(0, -1),//down
      "keyleft": new Vector2(1, 0),//left
      "keyup": new Vector2(0, 1),//up
      "keyright": new Vector2(-1, 0),//right
      "keydown": new Vector2(0, -1),//down
    };
    this.hole = new Vector2(3, 3);
  }
  tryMove(key) {
    let v = this.keyArray["key" + key];
    let target = this.hole.add(v);
    if (target.x < 0 || 4 <= target.x || target.y < 0 || 4 <= target.y) {
      return null;
    }
    //console.log("move " + key + ":" + JSON.stringify(v) + JSON.stringify(this.hole) + JSON.stringify(target));
    let tmp = this.field[target.y][target.x];
    console.log("target:" + tmp);
    this.field[target.y][target.x] = this.field[this.hole.y][this.hole.x];
    this.field[this.hole.y][this.hole.x] = tmp;
    this.hole = target;
    return tmp;
  }
  get isDone() {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (x == 3 && y == 0) {
          if (this.field[y][x] != "__")
            return false;
        } else {
          if (this.field[y][x] != (3 - y) * 4 + x + 1)
            return false;
        }
      }
    }
    return true;
  }
  finish() {
    this.field[3][3] = 16;
  }
}
