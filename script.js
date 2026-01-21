// ----- Grid setup -----
const board = document.getElementById("game-board");

// Create 100 cells
for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  board.appendChild(cell);
}

// ----- Player setup -----
let playerPosition = 90; // bottom-left
const player = document.createElement("img");
player.id = "player";
player.src = "assets/player.jpg";
player.style.width = "40px";
player.style.height = "40px";
document.querySelector(`[data-index="${playerPosition}"]`).appendChild(player);

// ----- Page-specific special cells -----
const currentPage = window.location.pathname.split("/").pop();

let specialCells = {};    // popup info
let cellImages = {};      // grid cell icons

if (currentPage === "index.html") {
  // cell image
  cellImages = { 5: "assets/yes.jpg", 49: "assets/no.jpg"};
  // popup info
  specialCells = { 5: { text: "yippeeeee!", image: "assets/popupplaceholder.jpg" }, //yes
                  49: { text: "bitch do it again", image: "assets/popupplaceholder.jpg" } }; //no
} else if (currentPage === "page2.html") {
  cellImages = { 33: "assets/cellplaceholder.jpg" };
  specialCells = { 33: { text: "lolol", image: "assets/popupplaceholder.jpg" } };
} else if (currentPage === "page3.html") {
  cellImages = { 33: "assets/cellplaceholder.jpg" };
  specialCells = { 33: { text: "lolol", image: "assets/popupplaceholder.jpg" } };
} else if (currentPage === "page4.html") {
  cellImages = { 33: "assets/cellplaceholder.jpg" };
  specialCells = { 33: { text: "lolol", image: "assets/popupplaceholder.jpg" } };
} else if (currentPage === "page5.html") {
  cellImages = { 33: "assets/cellplaceholder.jpg" };
  specialCells = { 33: { text: "lolol", image: "assets/popupplaceholder.jpg" } };
}

// ----- Apply images to grid cells -----
for (const index in cellImages) {
  const cell = document.querySelector(`[data-index="${index}"]`);
  if (cell) {
    cell.style.backgroundImage = `url('${cellImages[index]}')`;
    cell.style.backgroundSize = "cover";
    cell.style.backgroundPosition = "center";
    cell.style.backgroundRepeat = "no-repeat";
  }
}

// ----- Movement -----
function movePlayer(newPosition) {
  document.getElementById("player").remove();
  playerPosition = newPosition;
  document.querySelector(`[data-index="${playerPosition}"]`).appendChild(player);
  checkForPopup();
}

function checkForPopup() {
  const cellInfo = specialCells[playerPosition];
  const popup = document.getElementById("popup");

  if (cellInfo) {
    popup.innerHTML = `
      <img src="${cellInfo.image}" />
      <p>${cellInfo.text}</p>
      <button id="close-popup">Close</button>
    `;
    popup.style.display = "block";

    document.getElementById("close-popup").addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  let newPosition = playerPosition;

  if (key === "w") newPosition -= 10;
  if (key === "s") newPosition += 10;
  if (key === "a" && playerPosition % 10 !== 0) newPosition -= 1;
  if (key === "d" && playerPosition % 10 !== 9) newPosition += 1;

  if (newPosition >= 0 && newPosition < 100) movePlayer(newPosition);
});

// ----- Next button -----
const nextBtn = document.getElementById("next-btn");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    const pages = ["index.html","page2.html","page3.html","page4.html","page5.html"];
    const idx = pages.indexOf(currentPage);
    if (idx >= 0 && idx < pages.length - 1) window.location.href = pages[idx + 1];
    else alert("You are on the last page!");
  });
}

// ----- Restart button (page5) -----
const restartBtn = document.getElementById("restart-btn");
if (restartBtn) {
  restartBtn.addEventListener("click", () => window.location.href = "index.html");
}
