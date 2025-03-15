// Predefined Sudoku Boards
const board1 = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const board2 = [
    [8, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 2, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 8, 0, 0, 3, 0],
    [0, 6, 0, 0, 0, 0, 0, 9, 0],
    [0, 7, 0, 0, 6, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 5, 0, 0],
    [0, 0, 8, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 6]
];

// Predefined Solutions
const solution1 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const solution2 = [
    [8, 4, 3, 5, 9, 7, 6, 2, 1],
    [7, 5, 9, 6, 2, 1, 4, 8, 3],
    [6, 1, 2, 8, 4, 3, 9, 5, 7],
    [2, 9, 5, 1, 8, 6, 7, 3, 4],
    [3, 6, 7, 2, 5, 4, 8, 9, 1],
    [4, 7, 1, 3, 6, 9, 2, 5, 8],
    [9, 2, 4, 7, 1, 8, 5, 6, 3],
    [1, 3, 8, 9, 7, 5, 6, 4, 2],
    [5, 8, 6, 4, 3, 2, 1, 7, 9]
];

// Track current board
let currentBoard = board1;
let solution = solution1;

// Generate Sudoku Board
function generateSudoku() {
    const table = document.getElementById("sudoku-board");
    table.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("td");
            if (currentBoard[i][j] !== 0) {
                cell.innerHTML = `<strong>${currentBoard[i][j]}</strong>`;
            } else {
                cell.innerHTML = `<input type="number" min="1" max="9" id="cell-${i}-${j}">`;
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// Check User's Solution
function checkSolution() {
    let correct = true;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let inputCell = document.getElementById(`cell-${i}-${j}`);
            if (inputCell) {
                let userInput = parseInt(inputCell.value) || 0;
                if (userInput !== solution[i][j]) {
                    inputCell.style.backgroundColor = "red";
                    correct = false;
                } else {
                    inputCell.style.backgroundColor = "lightgreen";
                }
            }
        }
    }

    alert(correct ? "🎉 Correct Solution!" : "❌ Some numbers are incorrect!");
}

// Reset Board
function resetBoard() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let inputCell = document.getElementById(`cell-${i}-${j}`);
            if (inputCell) {
                inputCell.value = "";
                inputCell.style.backgroundColor = "white";
            }
        }
    }
}

// Show Solution
function solveSudoku() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let inputCell = document.getElementById(`cell-${i}-${j}`);
            if (inputCell) {
                inputCell.value = solution[i][j];
                inputCell.style.backgroundColor = "lightblue";
            }
        }
    }
}

// Toggle Boards
function switchBoard() {
    if (currentBoard === board1) {
        currentBoard = board2;
        solution = solution2;
    } else {
        currentBoard = board1;
        solution = solution1;
    }
    generateSudoku();
}

// Initialize Game
window.onload = generateSudoku;
