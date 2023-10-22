let particles = [];
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(255);

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].applyForce(gravity);
    particles[i].update();
    particles[i].display();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }

  console.log(particles.length);
}

function mousePressed() {
  createParticles(mouseX, mouseY);
}

function createParticles(x, y) {
  const emitter = new Emitter(x, y);
  emitter.createParticles();
  particles = particles.concat(emitter.particles);
}
