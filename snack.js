
class Snack {
  
  constructor({x = ((width/2) - 10), y, size = 20} = {}) {
    this.x = x;
    this.y = y || height - (size/2);
    this.size = size;
  }
  
  draw() {
    fill(0,0,0);
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  isCrashed() {
    if (this.x < 0 || (this.x + this.size) > width) {
      return true;
    }
    
    if (this.y < 0 || this.y + (this.size) > height) {
      return true;
    }
    
    return false;
  }
  
  getCenterX() {
    return Math.floor(this.x + (this.size/2));
  }
  
  
  getCenterY() {
    return Math.floor(this.y + (this.size/2));
  }
}