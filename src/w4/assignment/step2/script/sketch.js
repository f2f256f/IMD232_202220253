let mover;
let gravity;
let mX, mY, pmX, pmY;
let throwingForce;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  mover = new Mover(width / 2, height / 2, 80);
  gravity = createVector(0, 0.2);

  mX = mouseX;
  mY = mouseY;
  pmX = mouseX;
  pmY = mouseY;

  background(255);
}

function draw() {
  const force = p5.Vector.mult(gravity, mover.mass);

  pmX = mX;
  pmY = mY;
  mX = mouseX;
  mY = mouseY;

  background(255);

  mover.applyForce(force);
  mover.update();
  mover.edgeBounce();
  mover.display();
}

function mouseMoved() {
  mover.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  mover.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  mover.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  mover.mouseReleased();
}
