const container = document.querySelector('.container');
const gridSize = 16;
let rows = document.createDocumentFragment();

for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.classList.add('square');
    row.style.cssText = "flex-basis: " + (container.offsetWidth / gridSize);
    for (let j = 0; j < gridSize; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.cssText = "flex-basis: " + (container.offsetWidth / gridSize);
        square.addEventListener("mouseenter", (e) => {
            e.target.style.cssText = "background-color: black;";
        });
        row.appendChild(square);
    }
    rows.appendChild(row);
}

container.appendChild(rows);

