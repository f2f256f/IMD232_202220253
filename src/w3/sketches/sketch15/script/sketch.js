class Ball {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0, 0.1);
    this.radius = 25;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(20);
    this.pos.add(this.vel);
  }

  infiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x += width;
    } else if (this.pos.x >= width) {
      this.pos.x -= width;
    }
    if (this.pos.y < 0) {
      this.pos.y += height;
    } else if (this.pos.y >= height) {
      this.pos.y -= height;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}

let aBall;
let bBall;
let cBall;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');

  aBall = new Ball();
  bBall = new Ball();
  cBall = new Ball();
}

function draw() {
  background('white');
  aBall.update();
  aBall.infiniteEdge();
  aBall.display();
  bBall.update();
  bBall.infiniteEdge();
  bBall.display();
  cBall.update();
  cBall.infiniteEdge();
  cBall.display();
}

function update() {}

function infiniteEdge() {}

function display() {}
