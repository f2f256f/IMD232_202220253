// let x;
// let y;
let pos;
// let xAdd = 5;
// let yAdd = 3;
let vel;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  // 1. 변수 초기값 할당
  // x = width / 2;
  // y = height / 2;
  // 2. 백터: 초기값 할당
  pos = createVector(width / 2, height / 2);
  vel = createVector(5, 3);
}

function draw() {
  background('white');
  //1. 변수: 위치 업데이트
  // x += xAdd;
  // y += yAdd;

  //2. 백터: 초기값 할당
  pos.add(vel);

  // 1. 변수: 화면 밖으로 나가면 다시 화면 안으로 들이기
  // if (x < 0) {
  //   x += width;
  // } else if (x >= widht) {
  //   x -= width;
  // }
  // if (y < 0) {
  //   y += height;
  // } else if (y >= height) {
  //   y -= height;
  // }

  // 2. 백터: 화면 밖으로 나가면 다시 화면 안으로 들이기
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
  // 1. 변수: x, y, diameter = 2 * radius
  ellipse(pos.x, pos.y, 2 * radius);
}
