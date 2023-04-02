const container = document.getElementById('container');
const slider = document.getElementById("slider");
const rainbow = document.getElementById("rainbow")
const pen = document.getElementById("pencil")
const eraser = document.getElementById("whiteout")


pen.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".square");
    gridCells.forEach(cell => {
            cell.addEventListener("mouseover", () => {
            cell.classList.add("black");
        });
    });

});

eraser.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".square");
    gridCells.forEach(cell => {
            cell.addEventListener("mouseover", () => {
            cell.classList.add("white");
        });
    });

})

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
