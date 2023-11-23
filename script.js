const container = document.querySelector(".container");

let row = document.createElement('div');
row.classList.add('row'); 
container.appendChild(row);

let column = document.createElement('div');
column.classList.add('column'); 
row.appendChild(column);

const newGridBtn = document.querySelector(".new-grid-btn");

function returnGrid(row, column) {
  for (let i = 0; i < row; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

  for (let j = 0; j < column; j++) {
    let column = document.createElement('div');
    column.classList.add('column');
    row.appendChild(column); 
          
    column.addEventListener('mouseover', () => {
      column.style.backgroundColor = 'black';
            
      })
    }
  }
};

newGridBtn.addEventListener('click', () => {
  container.innerHTML= "";
  let newInput = prompt("Please enter a value for the grid");
  let newGridValue = parseInt(newInput);
  return returnGrid(newGridValue, newGridValue);
  }
);

column.addEventListener('mouseover', () => {
   column.style.backgroundColor = 'black';
 });


