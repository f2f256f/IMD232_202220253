class Emitter {
  constructor() {
    this.particles = [];
  }

  createParticle() {
    const startX = random(width);
    const startY = -30;

    this.particles.push(
      new Particle(startX, startY, 0, 0, 5, random(360), 100, 50)
    );
  }

  applyGravity(gravity) {
    this.particles.forEach((particle) => {
      const scaledG = p5.Vector.mult(gravity, particle.mass);
      particle.applyForce(scaledG);
    });
  }
  update() {
    this.particles.forEach((particle) => {
      particle.update();
    });

    for (let index = this.particles.length - 1; index >= 0; index--) {
      if (this.particles[index].isDead()) {
        this.particles.splice(index, 1);
      }
    }
  }

  display() {
    this.particles.forEach((particle) => {
      particle.display();
    });
  }
}
