let posX;
let posY;
let posXAdd = 3;
let posYAdd = -2;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  posX = width / 2;
  posY = height / 2;
  ellipse(posX, posY, 50);
}

function draw() {
  background(255);
  //계산을 그림보다 먼저하는게 좋음
  posX += posXAdd;
  posY += posYAdd;
  ellipse(posX, posY, 50);
}
