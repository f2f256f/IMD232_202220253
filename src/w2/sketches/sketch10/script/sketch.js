function setup() {
  let canvas;
  canvas = createCanvas(800, 500);
  let canvasParent;
  canvasParent = select('#canvas-goes-here');
  canvas.parent(canvasParent);
  background('white');
}

function draw() {
  // ectMode(CORNER);
  fill(255);
  colorMode(RGB);
  // stroke(1);
  // strokeWeight(1);

  fill(235, 245, 251);
  noStroke();
  rect(0, 0, 400, 200);

  fill(93, 109, 126);
  noStroke();
  rect(400, 0, 10, 200);

  fill(93, 109, 126);
  noStroke();
  rect(0, 200, 420, 10);

  fill(93, 109, 126, 50);
  noStroke();
  rect(300, 0, 150, 250);

  fill(128, 139, 150, 150);
  noStroke();
  rect(40, 50, 100, 150);

  fill(128, 139, 150, 150);
  noStroke();
  rect(170, 110, 100, 90);
}
