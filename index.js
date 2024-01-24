// Import stylesheets
import './style.css';

// Write Javascript code!
const chessboard = document.getElementById('chessboard');

function createChessboard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      const className = getClass(col, row);
      square.classList.add(`${className}`);

      // Add event listeners for hover effect
      square.addEventListener('mouseenter', () =>
        handleHover(square, col, row)
      );
      square.addEventListener('mouseleave', () =>
        handleLeave(square, col, row)
      );

      chessboard.appendChild(square);
    }
  }
}
const getClass = (col, row) => {
  return (col + row) % 2 == 0 ? '--black-tile' : '--white-tile';
};
function handleHover(square, col, row) {
  square.classList.add('light-blue');

  // Calculate squares attacked by a bishop
  for (let i = 1; i < 8; i++) {
    highlightSquare(col + i, row + i); // Bottom right diagonal
    highlightSquare(col + i, row - i); // Top right diagonal
    highlightSquare(col - i, row + i); // Bottom left diagonal
    highlightSquare(col - i, row - i); // Top left diagonal
  }
}

function handleLeave(square, col, row) {
  square.classList.remove('light-blue');
  for (let i = 1; i < 8; i++) {
    removehighlightSquare(col + i, row + i); // Bottom right diagonal
    removehighlightSquare(col + i, row - i); // Top right diagonal
    removehighlightSquare(col - i, row + i); // Bottom left diagonal
    removehighlightSquare(col - i, row - i); // Top left diagonal
  }
}

function highlightSquare(col, row) {
  const square = getSquare(col, row);
  if (square) {
    square.classList.add('dark-blue');
  }
}
function removehighlightSquare(col, row) {
  const square = getSquare(col, row);
  if (square) {
    square.classList.remove('dark-blue');
  }
}

function getSquare(col, row) {
  if (col >= 0 && col < 8 && row >= 0 && row < 8) {
    const index = row * 8 + col;
    return chessboard.children[index];
  }
  return null;
}

createChessboard();
