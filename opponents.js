const ENTRY_POINTS = [50, 150, 250];
const LENGTH = 80;

class Opponents {

  constructor(speed) {
    this.speed = speed || 1;
    this.opponents = [];
    this.count = 0;

    this.addOpponents();
  }

  canAddOpponents() {

    const lastOp = this.opponents[this.opponents.length - 1];
    if (!lastOp) {
      return true;
    }

    return lastOp.y > LENGTH + (LENGTH/2);
  }

  addOpponents() {
    let y = -LENGTH;

    const noOfOpsPerRow = random([1, 2]);

    if (this.canAddOpponents()) {

        for(let i = 0; i < noOfOpsPerRow; i++) {

    let x = random(ENTRY_POINTS);
            this.opponents.push(new Snack({x,y, size: LENGTH}));
        }
    }
  }

  setSpeed(speed) {
    this.speed = speed;
    return this;
  }

  update() {
    for (let i in this.opponents) {
      this.opponents[i].y += this.speed;
      this.opponents[i].draw();

      if (this.opponents[i].y - this.opponents[i].size > height) {
        delete this.opponents[i];
        this.count++;
      }
    };
  }

  isCrashed(snack) {
    for (let i in this.opponents) {
      const dist = createVector(
        this.opponents[i].x,
          this.opponents[i].y
      ).sub(createVector(
        snack.x,
        snack.y
      )).mag();

      if (dist <= this.opponents[i].size/2 + snack.size/2) {
        return true;
      }
    };

    return false;
  }

  reset() {
    this.opponents = [];
    this.count = 0;
  }
}
