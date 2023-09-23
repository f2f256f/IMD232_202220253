let pos;
let vel;
let acc;
let radius = 40;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector();
  acc = createVector();
}

function draw() {
  background('white');
  update();
  infiniteEdge();
  display();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(1.2);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function infiniteEdge() {
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
}

function display() {
  // 원의 중심점 위치 설정
  let cx = pos.x;
  let cy = pos.y;

  // 원 그리기
  fill(0);
  noStroke();
  ellipse(cx, cy, 2 * radius);

  // 마우스로 향하는 벡터 - 초록색
  strokeWeight(2);
  stroke(0, 255, 0);
  line(cx, cy, mouseX, mouseY);

  // 가속도 벡터 - 빨간색
  let accVector = acc;
  accVector.mult(100);
  strokeWeight(2);
  stroke(255, 0, 0);
  line(cx, cy, cx + accVector.x, cy + accVector.y);

  // 속도 벡터 - 파란색
  let velVector = vel.copy();
  velVector.mult(10);
  strokeWeight(2);
  stroke(0, 0, 255);
  line(cx, cy, cx + velVector.x, cy + velVector.y);
}
