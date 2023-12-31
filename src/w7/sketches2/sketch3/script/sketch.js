let traffic;
let infiniteOffset = 80;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  colorMode(HSL, 360, 100, 100, 100);
  background('white');
  traffic = new Traffic();
  for (let n = 0; n < 10; n++) {
    //10개 이상 있는 상태에서 시작
    traffic.addVehicle(random(width), random(height));
  }
}

function draw() {
  background('white');
  traffic.run();
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}
