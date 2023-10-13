class Mover {
  constructor(x, y, rad) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1;
    this.rad = rad;
    this.isHover = false;
    this.isDragging = false;
    this.draggingOffset = createVector();
  }

  applyForce(force) {
    const f = force.copy().mult(throwingForce);
    if (!this.isDragging) {
      this.acc.add(f);
      const gravityForce = p5.Vector.mult(gravity, this.mass);
      this.acc.add(gravityForce);
    }
  }

  update() {
    if (this.isDragging) {
    } else {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  }

  edgeBounce() {
    const bounce = -0.8;
    if (this.pos.x < 0 + this.rad) {
      this.vel.x *= bounce;
      this.pos.x = 0 + this.rad;
    } else if (this.pos.x > width - 1 - this.rad) {
      this.vel.x *= bounce;
      this.pos.x = width - 1 - this.rad;
    }
    if (this.pos.y < 0 + this.rad) {
    } else if (this.pos.y > height - 1 - this.rad) {
      this.vel.y *= bounce;
      this.pos.y = height - 1 - this.rad;
    }
  }

  display() {
    noStroke();
    fill('midnightblue');
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.draggingOffset.x = this.pos.x - mX;
      this.draggingOffset.y = this.pos.y - mY;
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.x = mX + this.draggingOffset.x;
      this.pos.y = mY + this.draggingOffset.y;
    }
  }

  mouseReleased() {
    this.isDragging = false;
    const throwVector = createVector(mX - pmX, mY - pmY);
    const speed = throwVector.mag();
    const maxSpeed = 30;
    throwingForce = map(speed, 0, maxSpeed, 0, 1);
    this.vel = throwVector.mult(throwingForce);
    this.vel.limit(10);
    this.applyForce(this.vel);
    pmX = mX;
    pmY = mY;
  }
}
