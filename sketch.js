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

  if (opponents.isCrashed(snack) || snack.isCrashed()) {
    reset();
  }

  if (mouseIsPressed) {
    onMousePressed();
  }

  onKeyPressed();

  snack.draw();
}

function reset() {
    opponents.reset();
}

function onMousePressed() {
  if (mouseX < width/2) {
    snack.moveLeft(speed);
  } else {
    snack.moveRight(speed);
  }
}

function onKeyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    snack.moveLeft(speed);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    snack.moveRight(speed);
  }
}

