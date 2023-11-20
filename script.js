const container = document.querySelector(".container");

const input = prompt("Please enter a value for the grid");
const gridValue = parseInt(input);
/*
const row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

const column = document.createElement('div');
column.classList.add('column');
row.appendChild(column);
column.textContent = 'Column';
*/

function returnInput(gridValue) {
  return returnGrid(gridValue, gridValue);
}

function returnGrid(row, column) {
  for (let i = 0; i < row; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 0; j < column; j++) {
      const column = document.createElement('div');
      column.classList.add('column');
      row.appendChild(column); 
      column.textContent = 'Column';
    }
  }
}

returnInput(gridValue);
