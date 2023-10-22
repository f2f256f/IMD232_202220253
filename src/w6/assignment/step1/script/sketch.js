let emitter;
let g;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 10, 100);
  emitter = new Emitter();
  g = createVector(0, 0.025);
  background(255);
}

function draw() {
  background(255);
  emitter.createParticle();
  emitter.applyGravity(g);
  emitter.update();
  emitter.display();
  console.log(emitter.particles.length);
}
