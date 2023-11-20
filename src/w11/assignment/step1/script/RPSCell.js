const STATES = {
  ROCK: 'Turquoise',
  PAPER: 'Blue',
  SCISSORS: 'MediumSpringGreen',
};

class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = 'ROCK'; // 초기값 설정
    this.nextState = this.state; // nextState 초기값 설정
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    const opponentState = {
      ROCK: 'SCISSORS',
      PAPER: 'ROCK',
      SCISSORS: 'PAPER',
    };

    const opponentCount = this.neighbors.reduce((count, neighbor) => {
      if (neighbor && neighbor.state === opponentState[this.state]) {
        return count + 1;
      }
      return count;
    }, 0);

    if (opponentCount <= 2) {
      this.nextState = this.state; // 방어
    } else {
      // 점령당함
      const winningNeighbor = this.neighbors.find(
        (neighbor) => neighbor && neighbor.state === opponentState[this.state]
      );

      if (winningNeighbor) {
        this.nextState = winningNeighbor.state;
      } else {
        this.nextState = this.state; // 만약 winningNeighbor가 없다면 현재 상태 유지
      }
    }
  }

  update() {
    this.state = this.nextState;
  }

  isHover(mx, my) {
    return (
      this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
    );
  }

  toggleState(mx, my) {
    if (!this.isClickable) return false;
    if (!this.isHover(mx, my)) return false;
    this.state = this.getNextState();
    return true;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(STATES[this.state]);
    rect(0, 0, this.w, this.h);
    pop();
  }

  getNextState() {
    const nextStateMap = {
      ROCK: 'PAPER',
      PAPER: 'SCISSORS',
      SCISSORS: 'ROCK',
    };

    return nextStateMap[this.state] || this.state;
  }
}
