let traffic; //traffic 변수 설정
let infiniteOffset = 80; //infiniteOffset 변수 지정 및 값 80으로 초기화

function setup() {
  // 한 번만 실행
  setCanvasContainer('canvas', 3, 2, true); //캔버스 설정
  colorMode(HSL, 360, 100, 100, 100); //컬러모드를 HSL로 지정
  background('white'); // 배경을 흰색으로 설정
  traffic = new Traffic(); // traffic 변수에 new Traffic 클래스 할당
  for (let n = 0; n < 10; n++) {
    // n이 0부터 시작해서 10보다 작을 동안 반복
    traffic.addVehicle(random(width), random(height)); // 랜덤한 위치에 Vehicle을 생성하고 traffic에 추가
  } // 즉, 랜덤한 위치에 10개의 Vehicle을 생성
}

function draw() {
  //매 프레임 마다 실행되는 함수
  background('white'); // 배경 흰색으로 그리기
  traffic.run(); //traffic의 run을 호출
}

function mouseDragged() {
  //마우스가 드래그 됐을 때 실행되는 함수
  traffic.addVehicle(mouseX, mouseY); // 현재 위치에 새로운 Vehicle을 생성하고 traffic에 추가
}
