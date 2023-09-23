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
  display();
}

function update() {
  //원의 중심점으로부터 마우스로 향하는 벡터를 생성(target)
  let target = createVector(mouseX, mouseY);
  let accVector = p5.Vector.sub(target, pos);
  //정규화하여 길이를 1로 바꾼 후 0.1을 곱하여 가속도 벡터를 설정
  accVector.normalize();
  accVector.mult(0.1);
  acc = accVector;

  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function display() {
  // 원 그리기
  fill(0);
  noStroke();
  ellipse(pos.x, pos.y, 2 * radius);

  // 마우스로 향하는 벡터 - 초록색
  strokeWeight(2);
  stroke(0, 255, 0);
  line(pos.x, pos.y, mouseX, mouseY);

  // 가속도 벡터 - 빨간색
  let accVector = acc.copy();
  accVector.mult(100);
  strokeWeight(2);
  stroke(255, 0, 0);
  line(pos.x, pos.y, pos.x + accVector.x, pos.y + accVector.y);

  // 속도 벡터 - 파란색
  let velVector = vel.copy();
  velVector.mult(10);
  strokeWeight(2);
  stroke(0, 0, 255);
  line(pos.x, pos.y, pos.x + velVector.x, pos.y + velVector.y);
}
