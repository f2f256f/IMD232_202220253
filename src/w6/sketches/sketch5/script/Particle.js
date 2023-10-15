class Particle {
  constructor(x, y, mass, rad, lifeSpan) {
    this.pos = createVector(x, y);
    // this.vel = createVector(0, 0);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-120, -60));
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = rad;
    this.lifeSpan = lifeSpan;
    this.life = this.lifeSpan;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.life--;
  }

  display() {
    // noStroke();
    // fill(255, 255 * this.getNormalizedLife());
    // ellipse(this.pos.x, this.pos.y, this.rad * 2);
    tint(255, 255, 0, 255 * this.getNormalizedLife()); //투명도 적용 색 RGB만 가능
    image(texture, this.pos.x, this.pos.y); //이미지 뿌리기
  }

  getNormalizedLife() {
    return this.life / this.lifeSpan;
  }

  isDead() {
    return this.life < 0;
  }
}
