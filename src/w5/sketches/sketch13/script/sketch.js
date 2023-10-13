let x, y;
const rad = 50;
let isHover = false; //마우스가 안에 있냐없냐
let isDragging = false; //마우스가 안에 있던 상태에서 클릭이됐냐
let deltaX, deltaY; //눌린 위치 저장(옮길 떄 중심으로 이동되지 않도록)

let movableObj;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  x = width / 2;
  y = height / 2;

  movableObj = new MovableObj(width / 4, height / 4, 50);

  colorMode(HSL, 360, 100, 100, 100);
  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);
  display();
  movableObj.display();
}

//hover인지 아닌지 판단
function chkHover(mX, mY) {
  const distSq = (x - mX) ** 2 + (y - mY) ** 2;
  return distSq <= rad ** 2;
}

function display() {
  noStroke();
  if (isHover) {
    fill(30, 80, 50);
  } else {
    fill(30, 60, 50);
  }
  ellipse(x, y, 2 * rad);
}

//마우스가 움직일때마다
function mouseMoved() {
  isHover = chkHover(mouseX, mouseY);
  movableObj.mouseMoved(mouseX, mouseY);
}

//클릭하면 드래그해서 움직일 수 있게 하기
function mousePressed() {
  //원 안을 클릭해야 움직임
  if (isHover) {
    isDragging = true; //안에 있으니까 드래그는 활성화
    deltaX = mouseX - x;
    deltaY = mouseY - y;
  }
  movableObj.mousePressed(mouseX, mouseY);
}
function mouseDragged() {
  if (isDragging) {
    x = mouseX - deltaX; //외곽 클릭해도 자연스럽게
    y = mouseY - deltaY;
  }
  movableObj.mouseDragged(mouseX, mouseY);
}

//늘렀다 때면 Released
function mouseReleased() {
  isDragging = false;
  movableObj.mouseReleased();
}
