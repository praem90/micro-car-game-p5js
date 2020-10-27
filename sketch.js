var speed = 1;
var snack;
var opponents;
var crashSound;

function preload() {
  soundFormats('mp3', 'ogg');
  crashSound = loadSound("sounds/car-crash-sound-effect.mp3");
  crashSound.setLoop(false);
}

function setup() {
  createCanvas(300, 500);

  snack = new Snack({size: 50});
  opponents = new Opponents(speed);
}

function draw() {
  background(222);

  updateSpeed();

  opponents.addOpponents();
  opponents.setSpeed(speed).update();

  textSize(16);
  fill(111);
  text("Score: " + opponents.count, 20, 20);


  textSize(16);
  fill(111);
  text("Speed: " + speed, 20, 40);

  if (mouseIsPressed) {
    onMousePressed();
  }

  onKeyPressed();

  snack.draw();

  if (opponents.isCrashed(snack) || snack.isCrashed()) {
    reset();
  }
}

function reset() {
    opponents.reset();
    speed = 1;
    crashSound.play();
}

function updateSpeed() {
  if (opponents.count > 10) {
    speed = 2;
  }

  if (opponents.count > 20 && speed < 4) {
    speed = 4;
  }
  if (opponents.count > 40 && speed < 6) {
    speed = 6;
  }
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

