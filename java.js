function createGrid(size) {
  gridSize = size * size;
  container = document.querySelector("#container");
  container.style = `grid-template-columns: repeat(${size}, ${
    800 / size
  }px); grid-template-rows: repeat(${size}, ${800 / size}px);`;
  // container.style = `grid-template-rows: repeat(${size}, ${800/size}px);`;
  for (i = 1; i <= gridSize; i++) {
    pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.dataset.number = i;
    container.appendChild(pixel);
  }
}

function sketch(pixel) {
  pixel.classList.add("selected");
}

function clearPixels() {
  pixels = document.querySelectorAll(".pixel");
  pixels.forEach((element) => {
    element.classList.remove("selected");
  });
}

function createNewDrawing() {
  let answer = prompt("How many pixels per side would you like?");
  if (answer != "" || parseInt(answer) != NaN) {
    createGrid(answer);
  }
}

createNewDrawing();
document.querySelector("#container").addEventListener("mouseover", (pixel) => {
  container.addEventListener("mouseover", (pixel) => {
    if (pixel.target.classList.contains("pixel")) {
      sketch(pixel.target);
    }
  });
});

document.querySelector(".button").addEventListener("click", () => {
  clearPixels()
  createNewDrawing();
});
