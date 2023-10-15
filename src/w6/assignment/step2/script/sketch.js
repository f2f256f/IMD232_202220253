// sketch.js
let pendulum1;
let pendulum2;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  pendulum1 = new Pendulum(width / 2, 10, height / 3, (TAU / 360) * 45, 50);
  pendulum2 = new Pendulum(
    pendulum1.ballPos.x,
    pendulum1.ballPos.y,
    height / 4,
    (TAU / 360) * 45,
    20
  );

  // 추가: 다음 Pendulum 설정
  pendulum1.setNextPendulum(pendulum2);

  gravity = createVector(0, 0.5);

  background(255);
}

function draw() {
  pendulum1.applyGravity(gravity);
  pendulum1.update();

  pendulum2.applyGravity(gravity);
  pendulum2.update();
  pendulum2.follow(pendulum1);

  background(255);
  pendulum1.display();
  pendulum2.display();
}

function mouseMoved() {
  pendulum1.mouseMoved(mouseX, mouseY);
  pendulum2.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  pendulum1.mousePressed(mouseX, mouseY);
  pendulum2.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  pendulum1.mouseDragged(mouseX, mouseY);
  pendulum2.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  pendulum1.mouseReleased();
  pendulum2.mouseReleased();
}
