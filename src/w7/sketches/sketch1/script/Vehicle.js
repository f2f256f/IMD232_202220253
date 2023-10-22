class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx; //최고속도
    this.forceMx = forceMx;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    // const headingAngle = atan2(this.vel.y, this.vel.x);
    const headingAngle = this.vel.heading(); //고개 각도
    push();
    translate(this.pos.x, this.pos.y);
    rotate(headingAngle);
    fill(0);
    noStroke();
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    noFill();
    stroke('red');
    ellipse(0, 0, 2 * this.rad);
    pop();
  }

  seek(target) {
    //타켓에서 내 위치 빼기 = desiredVelocity
    const desiredVelocity = p5.Vector.sub(target, this.pos);
    desiredVelocity.setMag(this.speedMx);
    //고개를 돌리는 힘
    const steer = p5.Vector.sub(desiredVelocity, this.vel); //자연스럽게 고개 움직이기
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }
}
