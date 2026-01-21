// 1. Grid
const board = document.getElementById("game-board");

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  board.appendChild(cell);
}

// 2. Special cells
const specialCells = {
  22: "You found a treasure!",
  47: "This is a mysterious place.",
  88: "You reached the goal!"
};

// 3. 👇 VISUAL INDICATORS GO HERE
for (const index in specialCells) {
  const cell = document.querySelector(`[data-index="${index}"]`);
  if (cell) {
    cell.style.backgroundColor = "#ffeaa7";
    // OR use an image:
    // cell.style.backgroundImage = "url('assets/icon.png')";
    // cell.style.backgroundSize = "cover";
  }
}

// 3. Player setup
let playerPosition = 90;

const player = document.createElement("div");
player.id = "player";
player.textContent = "🧍";

document
  .querySelector(`[data-index="${playerPosition}"]`)
  .appendChild(player);

// 4. FUNCTIONS (DEFINED BEFORE USE)
function movePlayer(newPosition) {
  document.getElementById("player").remove();
  playerPosition = newPosition;

  document
    .querySelector(`[data-index="${playerPosition}"]`)
    .appendChild(player);

  checkForPopup();
}

function checkForPopup() {
  if (specialCells[playerPosition]) {
    alert(specialCells[playerPosition]);
  }
}

// 5. EVENT LISTENER (LAST)
document.addEventListener("keydown", (e) => {
  let newPosition = playerPosition;
  const key = e.key.toLowerCase();

  if (key === "w") newPosition -= 10;
  if (key === "s") newPosition += 10;
  if (key === "a" && playerPosition % 10 !== 0) newPosition -= 1;
  if (key === "d" && playerPosition % 10 !== 9) newPosition += 1;

  if (newPosition >= 0 && newPosition < 100) {
    movePlayer(newPosition);
  }
});


const nextBtn = document.getElementById("next-btn");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    window.location.href = "page2.html";
  });
}
