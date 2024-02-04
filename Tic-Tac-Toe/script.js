let currentPlayer = 'O';
let moves = 0;
const cells = document.querySelectorAll('.cell');
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(cell) {
  if (cell.textContent === '') {
    cell.textContent = currentPlayer;
    moves++;
    if (checkWin()) {
      alert(currentPlayer + ' win!');
      resetGame();
    } else if (moves === 9) {
      alert('draw!');
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    }
  }
}

function checkWin() {
  return winConditions.some(condition => {
    return condition.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function resetGame() {
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'O';
  moves = 0;
}
