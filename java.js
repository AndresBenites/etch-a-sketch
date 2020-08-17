function createGrid(size) {
  gridSize = size * size;
  container = document.querySelector("#container");
  container.style = `grid-template-columns: repeat(${size}, ${
    800 / size
  }px); grid-template-rows: repeat(${size}, ${800 / size}px);`;
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
  if (isNaN(parseInt(answer))) {
      alert("Please enter a number between 8 and 128");
    return;
  } else if (parseInt(answer) <= 128 && parseInt(answer)>= 8){
    createGrid(answer);
  } else {
    alert("Please enter a number between 8 and 128");
      return;
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
  clearPixels();
  createNewDrawing();
});
