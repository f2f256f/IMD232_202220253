const cells = [];
const rowNum = 50,
  colNum = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  const cellWidth = width / colNum;
  const cellHeight = height / rowNum;

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = cellWidth * col;
      const y = cellHeight * row;
      const newCell = new Cell(x, y, cellWidth, cellHeight);
      cells.push(newCell);
    }
  }

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const neighborsIdx = [
        getCellIdx(row - 1, col - 1),
        getCellIdx(row - 1, col),
        getCellIdx(row - 1, col + 1),
        getCellIdx(row, col + 1),
        getCellIdx(row + 1, col + 1),
        getCellIdx(row + 1, col),
        getCellIdx(row + 1, col - 1),
        getCellIdx(row, col - 1),
      ];

      // 테두리 처리
      if (col === 0) {
        neighborsIdx[0] = -1;
        neighborsIdx[6] = -1;
        neighborsIdx[7] = -1;
      } else if (col === colNum - 1) {
        neighborsIdx[2] = -1;
        neighborsIdx[3] = -1;
        neighborsIdx[4] = -1;
      }
      if (row === 0) {
        neighborsIdx[0] = -1;
        neighborsIdx[1] = -1;
        neighborsIdx[2] = -1;
      } else if (row === rowNum - 1) {
        neighborsIdx[4] = -1;
        neighborsIdx[5] = -1;
        neighborsIdx[6] = -1;
      }

      const neighbors = neighborsIdx.map((eachIdx) =>
        eachIdx >= 0 ? cells[eachIdx] : null
      );

      const idx = getCellIdx(row, col);
      cells[idx].setNeighbors(neighbors);
    }
  }

  randomSeed(42);

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const rand = random(3);
      const idx = getCellIdx(row, col);

      if (rand < 1) {
        cells[idx].state = 'ROCK';
      } else if (rand < 2) {
        cells[idx].state = 'PAPER';
      } else {
        cells[idx].state = 'SCISSORS';
      }
    }
  }

  frameRate(30);
  background('white');
  noStroke();
  cells.forEach((cell) => {
    cell.display(mouseX, mouseY);
  });
}

function draw() {
  background('white');

  cells.forEach((cell) => {
    cell.calcNextState();
  });
  cells.forEach((cell) => {
    cell.update();
  });

  cells.forEach((cell) => {
    cell.display(mouseX, mouseY);
  });
}

function getCellIdx(row, col) {
  return row * colNum + col;
}

function mouseClicked() {
  for (let idx = 0; idx < cells.length; idx++) {
    if (cells[idx].toggleState(mouseX, mouseY)) break;
  }
}
