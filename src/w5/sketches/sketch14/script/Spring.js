class Spring {
  constructor(x, y, length, k) {
    //길이*상수 = 힘
    this.pos = createVector(x, y);
    this.restLength = length;
    this.k = k;
  }

  spring(hangingObj) {
    const dist = p5.Vector.dist(hangingObj.pos, this.pos); //거리재기
    const distDelta = dist - this.restLength;
    const towardBob = p5.Vector.sub(hangingObj.pos, this.pos); //Bob으로 향하는 벡터
    const force = towardBob.setMag(-1 * this.k * distDelta); //크기 정하기
    hangingObj.applyForce(force);
  }

  display(hangingObj) {
    noStroke();
    fill(127);
    ellipse(this.pos.x, this.pos.y, 20);
    noFill();
    stroke('#00FF00');
    line(this.pos.x, this.pos.y, hangingObj.pos.x, hangingObj.pos.y);
  }
}
