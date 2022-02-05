
const container = document.querySelector(".container");

//Create 256 squares to fill the container(16x16)
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
}

//function that adds "px" to numbers
function addPx(num){
    return num = num + "px";
}

//function that removes all childs of container
function removeContainerChilds(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
        console.log("A child has been removed")
    }
}

//function creating a grid of size*size size
function createGrid(size){

    if(size > 100){
        size = 100;
    }

    container.style.width = addPx(size*16);
    container.style.height = addPx(size*16);

    removeContainerChilds();

    for (let i = 0; i < (size*size); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }

    const squares = document.querySelectorAll(".square")

    squares.forEach(square => square.addEventListener("mouseover", function(e){
        this.style.backgroundColor = "blue";
    }));
}

const squares = document.querySelectorAll(".square")

squares.forEach(square => square.addEventListener("mouseover", function(e){
    this.style.backgroundColor = "blue";
}));

const buttonClear = document.querySelector(".clear");

buttonClear.addEventListener("click", function(){
    squares.forEach(square => {square.style.backgroundColor = "pink";});
    let gridSize = prompt("Choose the new size of the grid (Max:100x100)");
    createGrid(gridSize);
})