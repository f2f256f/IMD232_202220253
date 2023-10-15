const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0; // 시작 각도를 직접 조절
let angleStep = 15;
let canvasSize;
let circleSize;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  canvasSize = width;
  circleSize = canvasSize / cNum / 1.5;
  gridC = canvasSize / cNum;
  gridR = canvasSize / rNum;
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);
  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      let currentAngleBegin = angleBegin + c * angleStep + r; // 각 행별로 1씩 증가하도록 수정
      drawGraphics(c, r, currentAngleBegin);
    }
  }
  // angleBegin을 직접 조절
  angleBegin += 1; // 예시로 1씩 증가시킴, 필요에 따라 조절
}

function drawGraphics(c, r, currentAngleBegin) {
  let x = c * gridC + gridC / 2;
  let y = r * gridR + gridR / 2;
  let diameter = circleSize;

  noFill();
  strokeWeight(2);

  if (r % 2 === 0) {
    stroke(c % 2 === 0 ? 'blue' : 'green');
  } else {
    stroke(c % 2 === 0 ? 'red' : 'yellow');
  }

  ellipse(x, y, diameter, diameter);

  let currentAngle = currentAngleBegin;

  let endX = x + (cos(radians(currentAngle)) * circleSize) / 2;
  let endY = y + (sin(radians(currentAngle)) * circleSize) / 2;

  stroke(0);
  line(x, y, endX, endY);

  let smallCircleSize = 10;
  fill(0);
  ellipse(endX, endY, smallCircleSize, smallCircleSize);
}
