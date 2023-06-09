const container = document.getElementById('container');
const slider = document.getElementById("slider");
const rainbow = document.getElementById("rainbow")
const pen = document.getElementById("pencil")
const eraser = document.getElementById("whiteout")

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



pen.addEventListener("click", () => {
      const gridCells = document.querySelectorAll(".square");
    gridCells.forEach(cell => {
            cell.addEventListener("mouseover", () => {
                cell.classList.remove("white");
                cell.classList.remove("red", "orange", "yellow","green", "blue", "indigo", "violet")
                cell.classList.add("black");
        });

    });

});

eraser.addEventListener("click", () =>{
    const gridCells = document.querySelectorAll(".square");
    gridCells.forEach(cell => {
            cell.addEventListener("mouseover", () => {
                cell.classList.remove("black");
                cell.classList.remove("red", "orange", "yellow","green", "blue", "indigo", "violet")
                cell.classList.add("white");
        });
    });
});

rainbow.addEventListener("click", ()=> {
    const gridCells = document.querySelectorAll(".square");
    gridCells.forEach(cell => {
        let color = ["red", "orange", "yellow","green", "blue", "indigo", "violet"];
            cell.addEventListener("mouseover", () => {

                cell.classList.add(color[Math.floor(Math.random() * color.length)]);

        });
    });
})







