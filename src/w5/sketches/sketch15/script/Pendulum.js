class Pendulum {
  //진자의 각도
  //진자의 각도에 대한 속도
  //진자의 각도에 대한 가속도
  //진자의 중심점
  //진자의 길이
  //진자의 반지름
  constructor(x, y, rad, angle, ballRad) {
    this.angle = angle; //초기앵글
    this.angleVel = 0;
    this.angleAcc = 0;
    this.pos = createVector(x, y);
    this.rad = rad;
    this.ballPos = createVector(x, y);
    this.ballPos.add(cos(this.angle) * this.rad, sin(this.angle) * this.rad);
    this.ballRad = ballRad;
    this.movingOffset = createVector();
    this.isHover = false;
    this.isDragging = false;
  }

  applyForce(force) {
    this.angleAcc = (sin(this.angle - (TAU / 360) * 90) * -force.y) / this.rad; //아래로 내리는 힘만
  }

  update() {
    if (!this.isDragging) {
      this.angleVel *= 0.999; //시간이 지날수록 느리게 만들기
      this.angleVel += this.angleAcc;
      this.angle += this.angleVel;
    }
    //이 부분은 작동해야함
    this.ballPos.set(
      cos(this.angle) * this.rad + this.pos.x,
      sin(this.angle) * this.rad + this.pos.y
    );
  }

  display() {
    noStroke();
    fill(127);
    ellipse(this.pos.x, this.pos.y, 20);
    if (this.isDragging) {
      fill('#ff0000');
    } else if (this.isHover) {
      fill(127);
    } else {
      fill(191);
    }
    ellipse(this.ballPos.x, this.ballPos.y, 2 * this.ballRad);
    stroke(0);
    noFill();
    line(this.pos.x, this.pos.y, this.ballPos.x, this.ballPos.y);
  }

  //추를 클릭해서 이동하기
  mouseMoved(mX, mY) {
    this.isHover =
      (this.ballPos.x - mX) ** 2 + (this.ballPos.y - mY) ** 2 <= //ballPos.X 공을 움직일거니까
      this.ballRad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.movingOffset.set(mX - this.ballPos.x, mY - this.ballPos.y);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      //점에서 마우스까지 향하는 벡터 구하기
      const ballShouldBe = createVector(
        mX - this.movingOffset.x,
        mY - this.movingOffset.y
      );
      const angle = atan2(
        ballShouldBe.y - this.pos.y,
        ballShouldBe.x - this.pos.x
      );
      this.angle = angle;
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
