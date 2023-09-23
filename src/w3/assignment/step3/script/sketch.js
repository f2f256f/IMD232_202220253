let pos;
let vel;
let acc;
let radius = 40;
let isClicked = false;
let clickPos;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector();
  acc = createVector();
  clickPos = createVector();
}

function draw() {
  background('white');
  update();
  display();
}

function update() {
  if (mouseIsPressed) {
    if (!isClicked) {
      // 클릭한 경우
      isClicked = true;
      clickPos.set(mouseX, mouseY);
      let dir = p5.Vector.sub(pos, clickPos);
      dir.normalize();
      dir.mult(10); // 원을 밀어내는 힘 설정
      vel = dir;
    }
  } else {
    isClicked = false;
    // 클릭 해제한 경우
    let target = createVector(mouseX, mouseY);
    let pushForce = p5.Vector.sub(target, pos);
    pushForce.normalize();
    pushForce.mult(0.1);
    acc = pushForce;
  }

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
