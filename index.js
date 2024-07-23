// Create a function to generate a grid given argument 'size'
function createGrid(size) {
  const artPad = document.querySelector(".art-pad");
  const grid = document.querySelector(".grid");

  // CLear the existing grid
  grid.innerHTML = "";

  grid.style.display = "flex";
  grid.style.flexWrap = "wrap";

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    
    for (let j=0; j<size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.border = '1px solid black';
      row.appendChild(cell);
    }
    row.style.border = '1px solid black';
    grid.appendChild(row);

  }



    // Use an eventListener to listen for a click on the grid
    const squaresNodeList = document.querySelectorAll(".row");
    squaresNodeList.forEach((square) => {
      square.addEventListener("click", () => {
        square.style.backgroundColor = "black";
      });
    });
  }


// Get the users input for the size of the grid.
const sizeInput = document.getElementById("enterSize");
// When the user edits the input field, check if size is less than 100. If so, then call the createGrid function.
sizeInput.addEventListener("change", () => {
  const size = parseInt(sizeInput.value, 10);
  if (size > 100) {
    alert("Please enter a number less than 100.");
    sizeInput.value = "";
  } else {
    createGrid(size);
  }
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  const squaresNodeList = document.querySelectorAll(".square");
  squaresNodeList.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});
