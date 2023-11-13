const {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Vertices,
  Bodies,
  Common,
} = Matter;

Common.setDecomp(decomp);

const oWidth = 800;
const oHeight = 600;

let ropeA;
let ropeB;
let ropeC;

let mouse;
let mouseConstraint;

const engine = Engine.create(),
  world = engine.world;

const runner = Runner.create();

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

  let arrow = Vertices.fromPath('0 0 50 10 40 30 30 30 50 40 30 30 10 50');
  let star = Vertices.fromPath(
    '50 0 56 18 72 22 60 36 64 54 50 46 36 54 40 36 28 22 44 18'
  );

  //ropeA
  group = Body.nextGroup(true);

  ropeA = Composites.stack(130, 15, 9, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, Common.choose([star]), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.4, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  //ropeB
  group = Body.nextGroup(true);

  ropeB = Composites.stack(370, 30, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  //ropeC
  group = Body.nextGroup(true);

  ropeC = Composites.stack(610, 15, 9, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, Common.choose([arrow]), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 0.6, length: 15 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  Composite.add(world, [ropeA, ropeB, ropeC]);

  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mouseConstraint);

  background('white');
  Runner.run(runner, engine);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  background('white');

  noStroke();

  fill('salmon');
  ropeA.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });

  fill('cornflowerblue');
  ropeB.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((eachVertex) => {
      vertex(
        (eachVertex.x / oWidth) * width,
        (eachVertex.y / oHeight) * height
      );
    });
    endShape(CLOSE);
  });

  fill('DarkSeaGreen');
  ropeC.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });
}
