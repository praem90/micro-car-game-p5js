var xMag = 0;
var speed = 1;
var snack;
var opponents;

function setup() {
  createCanvas(300, 500);
  
  snack = new Snack({size: 50});
  opponents = new Opponents(speed);
}

function draw() {
  background(222);
  
  opponents.addOpponents();
  opponents.update();
  
  textSize(16);
  fill(111);
  text("Score: " + opponents.count, 20, 20);
  
  
  textSize(16);
  fill(111);
  text("Speed: " + speed, 20, 40);
  
  if (opponents.isCrashed(snack)) {
    reset();
  }
  
  snack.x += xMag;
  
  snack.draw();
}

function reset() {
    opponents.reset();
    xMag = 0;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xMag = -speed;
  }
  
  if (keyCode === RIGHT_ARROW) {
    xMag = speed;
  }
}

function keyReleased() {
  xMag = 0;
}
