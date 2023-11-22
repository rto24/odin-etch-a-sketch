const container = document.querySelector(".container");

const row = document.createElement('div');
container.appendChild(row);

const column = document.createElement('div');
row.appendChild(column);

const newGridBtn = document.querySelector(".new-grid-btn");

let input = prompt("Please enter a value for the grid");
let gridValue = parseInt(input);

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
    }
  }
};

returnInput(gridValue);

newGridBtn.addEventListener('click', () => {
  container.innerHTML= "";
  let newInput = prompt("Please enter a value for the grid");
  let newGridValue = parseInt(newInput);
  return returnGrid(newGridValue, newGridValue);
  }
);



