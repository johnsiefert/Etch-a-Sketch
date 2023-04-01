const container = document.getElementById('container');
const slider = document.getElementById("slider");
const gridValue = document.getElementById("grid-value")
const rainbow = document.getElementById("rainbow")
const eraser = document.getElementById("erase")

slider.addEventListener("click", () => { //
    let squares = slider.value;
    container.innerHTML = "";
   container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
   container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

    for (let i = 0; i < (squares * squares); i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        container.appendChild(square);
    }

    const gridCells = document.querySelectorAll(".square");

    gridCells.forEach(cell => {
            cell.addEventListener("mouseover", () => {
            cell.classList.add("hov-square");
        });
    });

});

rainbow.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".square");

    gridCells.forEach(cell => {
        let color = ["red", "orange", "yellow","green", "blue", "indigo", "violet"];
            cell.addEventListener("mouseover", () => {
                cell.style.background = color[Math.floor(Math.random() * color.length)];
        });
    });
})
