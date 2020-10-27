
class Snack {

  constructor({x, y, size = 20} = {}) {
    this.x = x || width/2;
    this.y = y || height - (size/2);
    this.size = size;
  }

  draw() {
    fill(0,0,0);
    ellipse(this.x, this.y, this.size, this.size);
  }

  isCrashed() {
    if (this.x < this.size/2 || (this.x + this.size/2) > width) {
      this.x = (width/2);
      return true;
    }

    if (this.y < 0 || this.y + (this.size/2) > height) {
      return true;
    }

    return false;
  }

  move(xMag) {
    this.x += xMag;
  }

  moveRight(xMag) {
    this.move(xMag);
  }

  moveLeft(xMag) {
    this.move(-xMag);
  }
}
