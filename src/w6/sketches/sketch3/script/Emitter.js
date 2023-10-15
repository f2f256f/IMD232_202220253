class Emitter {
  //sketch에서 필요한거 가져오기
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
  }

  addParticle() {
    this.particles.push(new Particle(this.pos.x, this.pos.y));
  }

  update(gravity) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
  }
}
