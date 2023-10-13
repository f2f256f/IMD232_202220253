let nGon = 8; //n각형
let rad = 250;
let x;
let y;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
}

function draw() {
  x = width / 2;
  y = height / 2;

  background(255);

  noFill();
  stroke(0);
  strokeWeight(1);
  ellipse(x, y, 2 * rad);
  noStroke();
  fill(0);
  //삼각형 그리기
  for (let a = 0; a < nGon; a++) {
    const angle = (TAU / nGon) * a - (TAU / 360) * 90; //도형앵글
    const pointX = cos(angle) * rad + x;
    const pointY = sin(angle) * rad + y;
    ellipse(pointX, pointY, 10);
  }
  stroke('red');
  noFill();
  beginShape();
  for (let a = 0; a < nGon; a++) {
    const angle = (TAU / nGon) * a - (TAU / 360) * 90;
    const pointX = cos(angle) * rad + x;
    const pointY = sin(angle) * rad + y;
    vertex(pointX, pointY); //좌표 이어주기
  }
  endShape(CLOSE);
  //어느 좌표 x,y에서 임의의 방향(각도) a로, 특정한 거리 r만큼 떨어진 좌표(m,n)를 찍으려면
  //m = cos(a) * r + x
  //n = sin(a) * r + y
}
