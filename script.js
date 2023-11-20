const container = document.querySelector(".container");

const row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

const column = document.createElement('div');
column.classList.add('column');
row.appendChild(column);
column.textContent = 'Column';

