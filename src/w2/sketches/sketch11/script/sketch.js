// function setup() {
//   setCanvasContainer('canvas-goes-here', 800, 500, true);
//   background(192, 192, 192);
// }

// function setup() {
//   let canvas;
//   canvas = createCanvas(960, 630, true);
//   let canvasParent;
//   canvasParent = select('#canvas-goes-here');
//   canvas.parent(canvasParent);
//   drawInitialContent();
//   background(192, 192, 192);
// }

// function setup() {
//   createCanvas(960, 630);
//   console.log(width);
//   console.log(height);
// }

let canvas;
let canvasWidth = 960;
let canvasHeight = 630;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight, true);
  canvas.parent('canvas-goes-here');
  drawInitialContent();
}

function draw() {
  background(192, 192, 192);
  colorMode(RGB);
  noStroke();
  rectMode(CORNER);
  fill(255);
  strokeWeight(1);

  fill(27, 35, 53); //floor

  rect(0, 490, 960, 140);
  fill(128, 128, 128, 180);

  rect(0, 475, 960, 15);

  fill(191, 210, 211); //창문
  rect(0, 0, 400, 200);

  fill(128, 128, 128);
  rect(400, 0, 10, 200); //창문 세로선
  rect(0, 200, 420, 10); //창문 가로선
  fill(105, 105, 105);
  rect(0, 210, 410, 10);
  fill(128, 128, 128);
  rect(0, 220, 410, 20);

  fill(240, 248, 255, 180);
  rect(300, 0, 150, 280); //커튼
  rect(0, 0, 70, 280); //커튼

  fill(128, 128, 128, 100);
  rect(40, 50, 100, 150); //아파트R

  fill(27, 38, 49, 50);
  rect(50, 60, 30, 20);

  fill(254, 249, 231, 50);
  rect(50, 100, 30, 20);
  rect(50, 140, 30, 20);
  rect(100, 60, 30, 20);

  fill(27, 38, 49, 50);
  rect(100, 100, 30, 20);

  fill(254, 249, 231, 50);
  rect(100, 140, 30, 20);

  fill(128, 128, 128, 100);
  rect(170, 110, 110, 90); //아파트L

  fill(27, 38, 49, 50);
  rect(180, 120, 40, 30);
  rect(230, 120, 40, 30);

  fill(230, 230, 250);
  rect(260, 380, 440, 20); //table

  fill(215, 210, 240);
  rect(305, 400, 350, 15);

  fill(230, 230, 250);
  rect(305, 410, 350, 15);
  rect(305, 410, 15, 150);

  fill(230, 230, 250);
  rect(640, 410, 15, 150);

  fill(123, 104, 238);
  rect(710, 430, 120, 15); //chair
  rect(710, 445, 120, 15);

  fill(215, 210, 240);
  rect(710, 445, 120, 15);

  fill(230, 230, 250);
  rect(710, 445, 15, 120);
  rect(815, 445, 15, 120);

  fill(46, 139, 87); //flower
  rect(60, 360, 40, 95, 55, 30, 0, 0);
  fill(60, 179, 113);
  rect(90, 380, 40, 70, 55, 30, 0, 0);

  fill(159, 89, 89); //flower
  rect(50, 450, 100, 110);

  fill(128, 128, 128);
  rect(565, 0, 5, 45); //액자 선
  rect(720, 0, 5, 45);
  rect(870, 0, 5, 45);

  rectMode(RADIUS);
  fill(169, 169, 169);
  rect(570, 120, 75, 75); //액자L

  rectMode(RADIUS);
  fill(255);
  rect(570, 120, 70, 70);

  rectMode(CENTER);
  fill(168, 200, 191);
  rect(570, 120, 120, 120);

  rectMode(RADIUS);
  fill(169, 169, 169);
  rect(800, 135, 120, 90); //액자R

  rectMode(RADIUS);
  fill(255);
  rect(800, 135, 115, 85);

  rectMode(CENTER);
  fill(245, 238, 192);
  rect(800, 135, 210, 150);

  fill(169, 169, 169);
  rect(610, 345, 40, 70); //cup

  fill(207, 104, 104, 150);
  rect(610, 355, 30, 40);
}

function drawInitialContent() {
  background(192, 192, 192);
}

function windowResized() {
  let newCanvasWidth = select('#canvas-goes-here').width;
  let newCanvasHeight = newCanvasWidth * (canvasHeight / canvasWidth);
  resizeCanvas(newCanvasWidth, newCanvasHeight);
  drawInitialContent();
}

// function drawInitialContent() {
//   background(192, 192, 192);
// }

// function windowResized() {
//   let newCanvasWidth = select('#canvas-goes-here').width;
//   let newCanvasHeight = select('#canvas-goes-here').height;
//   resizeCanvas(newCanvasWidth, newCanvasHeight);
//   drawInitialContent();
// }
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
