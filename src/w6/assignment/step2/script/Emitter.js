class Emitter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.particles = [];
  }

  createParticles() {
    for (let i = 0; i < 100; i++) {
      const angle = random(TWO_PI);
      const magnitude = random(19, 20);
      const mass = 10;
      this.particles.push(
        new Particle(this.pos.x, this.pos.y, angle, magnitude, mass)
      );
    }
  }
}
