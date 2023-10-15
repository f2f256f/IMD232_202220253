// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  particleArray.push(new Particle(width / 2, 20));

  background(255);
  for (let a = 0; a < particleArray.length; a++) {
    particleArray[a].applyForce(gravity);
    particleArray[a].update();
    particleArray[a].display();
  }

  for (let a = particleArray.length - 1; a >= 0; a--) {
    if (particleArray[a].isDead()) {
      particleArray.splice(a, 1); //127개를 넘지 않게 함.
      //수명 다하면 요소 지우기 > 새로운거 만들기
      //넘버링이 밀리지 않도록 뒤에서부터 제거
    }
  }

  console.log(particleArray.length);
}
