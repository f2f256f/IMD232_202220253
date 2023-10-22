class Particle {
  constructor(posX, posY, initialRotation, speed, mass, h, s, v) {
    this.startX = posX;
    this.pos = createVector(posX, posY);
    this.vel = createVector(0, 0.1);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass * 1;
    this.color = color(h, s, v);
    this.rotation = initialRotation;
    this.rotationSpeed = random(-0.1, 0.1);
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(createVector(0, 0.003));
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.rotation += this.rotationSpeed;
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);
    fill(this.color);
    noStroke();
    rect(-5, -5, 10);
    pop();
  }

  isDead() {
    return (
      this.pos.x < -this.rad ||
      this.pos.x > width + this.rad ||
      this.pos.y > height + this.rad
    );
  }
}
