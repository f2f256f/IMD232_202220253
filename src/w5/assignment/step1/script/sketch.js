const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel = 0.05;
let angleStep = 15;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);

  gridC = width / (cNum + 1);
  gridR = (height / (rNum + 1)) * 2;
}

function draw() {
  background(360, 0, 100);

  rectMode(CENTER);
  for (let b = 0; b < rNum; b++) {
    for (let a = 0; a < cNum; a++) {
      let x = ((a + 1) * width) / (cNum + 1);
      let y = ((b + 1) * height) / (rNum + 1);
      push();
      translate(x, y);
      rotate(radians(angleBegin + a * angleStep));

      let colorIndex = (a % 2) + 2 * (b % 2);
      let colors = ['blue', 'orange', 'red', 'green'];
      stroke(colors[colorIndex]);

      ellipse(0, 0, gridC * 0.8);
      let xOffset = cos(radians(angleBegin + a * angleStep)) * (gridC * 0.4);
      let yOffset = sin(radians(angleBegin + a * angleStep)) * (gridC * 0.4);
      line(0, 0, xOffset, yOffset);
      noStroke();
      fill('black');
      ellipse(xOffset, yOffset, gridC * 0.2);
      pop();
    }
    angleBegin += angleBeginVel;
  }
}
