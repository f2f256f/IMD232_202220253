const dotNum = 30;
const freq = 1 / 2; //꺾이는 개수
let angleStart = 0; //움직이게 하기
let angleStartVel;
let amp;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  angleStartVel = periodToVel(120); //(frame 60 = 1초마다 / 120 = 2초마다)
  //   angleStartVel = 0;
  amp = height / 4; //완만하게 움직임

  background(255);
}

function draw() {
  background(255);

  for (let a = 0; a < dotNum; a++) {
    const ellipseX = (width / (dotNum - 1)) * a;
    const dia = width / (dotNum - 1);
    const angle = angleStart + (TAU / (dotNum - 1)) * a * freq;
    ellipse(ellipseX, height / 2 + sin(angle) * amp, dia);
  }

  angleStart += angleStartVel; //움직이게 하기
}

function periodToVel(periodAsFrame) {
  //몇 프레임마다
  return TAU / periodAsFrame;
}
