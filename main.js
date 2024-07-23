let board = document.querySelector(".board");
let choice = document.querySelector(".colorChoice");
const size = document.querySelector(".size");
const sizeValue = size.value;
const setSize = document.querySelector(".setsize");
const reset = document.querySelector(".reset");
const eraser = document.querySelector(".eraser");
const erasercounter = 0;
board.style.gridTemplateColumns = `repeat(${sizeValue}, 1fr)`;
board.style.gridTemplateRows = `repeat(${sizeValue}, 1fr)`;

setSize.addEventListener("click", () => {
    let sizeValue = size.value;
    board.style.gridTemplateColumns = `repeat(${sizeValue}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${sizeValue}, 1fr)`;
    board.innerHTML = "";
    for (let i = 0; i < sizeValue * sizeValue; i++) {
      let square = document.createElement("div");
      square.style.backgroundColor = "white";
      board.insertAdjacentElement("beforeend", square);
      square.addEventListener("click", () => {
        let selectedColor = choice.options[choice.selectedIndex].value;
        square.style.backgroundColor = `${selectedColor}`;
      });
      square.classList.add("square");
      board.appendChild(square);
    }
  }
);
reset.addEventListener("click", function () {
  const squares = document.querySelectorAll(".square");
  squares.forEach(function (square) {
    square.style.backgroundColor = "white";
  });
});

for (let i = 0; i < sizeValue * sizeValue; i++) {
  let square = document.createElement("div");
  square.style.backgroundColor = "white";
  board.insertAdjacentElement("beforeend", square);
  // WE ARE USING insertAdjacentElement TO ADD THE SQUARE TO THE BOARD
  // BEFORE THE END OF THE BOARD
  // THIS IS THE SAME AS APPENDING THE CHILD TO THE PARENT
  square.addEventListener("click", () => {
    let selectedColor = choice.options[choice.selectedIndex].value;
    square.style.backgroundColor = `${selectedColor}`;
  });
  square.classList.add("square");
  board.appendChild(square);
}