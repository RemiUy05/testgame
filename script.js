const board = document.getElementById("game-board");

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i; // useful later
  board.appendChild(cell);
}

let playerPosition = 95; // bottom middle

const player = document.createElement("div");
player.id = "player";
player.textContent = "🧍";

document
  .querySelector(`[data-index="${playerPosition}"]`)
  .appendChild(player);

  document.addEventListener("keydown", (e) => {
  let newPosition = playerPosition;

  if (e.key === "w") newPosition -= 10;
  if (e.key === "s") newPosition += 10;
  if (e.key === "a" && playerPosition % 10 !== 0) newPosition -= 1;
  if (e.key === "d" && playerPosition % 10 !== 9) newPosition += 1;

  if (newPosition >= 0 && newPosition < 100) {
    movePlayer(newPosition);
  }
});
