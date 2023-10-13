const bodies = [];
let showVector = false;
const G = 1;
const bodyNum = 30;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
  init();
}

function draw() {
  background(255);

  for (let i = 0; i < bodyNum; i++) {
    for (let j = 0; j < bodyNum; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

function mousePressed() {
  init();
}

function init() {
  bodies.length = 0;

  while (bodies.length < bodyNum) {
    bodies.push(new Body(random(width), random(height), random(16, 100)));
  }
}
