class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = radius;
    this.mass = radius ** (1 / 2);
  }

  applyForce(force) {
    // force.div(this.mass);
    // force를 변화시키지 않고 하는 방법 = p5.Vector  ...누적
    let divedForce = p5.Vector.div(force, this.mass);
    this.acc.add(divedForce);
  }

  //class에선 function 쓰지 않기
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // let divedForce = p5.Vector.div(force, this.mass);을 썼을 경우 acc 초기화(매프레임마다 초기화해서 계산)
    this.acc.mult(0);
  }

  edgeBounce() {
    if (this.pos.x < 0 + this.radius) {
      let delta = this.pos.x - (0 + this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1 - this.radius) {
      let delta = this.pos.x - (width - 1 - this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1 - this.radius) {
      let delta = this.pos.y - (height - 1 - this.radius);
      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}
