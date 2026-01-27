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
player.src = "assets/ken.png";
player.style.width = "40px";
player.style.height = "40px";
document.querySelector(`[data-index="${playerPosition}"]`).appendChild(player);

// ----- Page-specific special cells -----
const currentPage = window.location.pathname.split("/").pop();

let specialCells = {};    // popup info
let cellImages = {};      // grid cell icons

if (currentPage === "index.html") {
  // cell image
  cellImages = { 5: "assets/index/yes.png", 49: "assets/index/no.png"};
  // popup info
  specialCells = { 5: { text: "yippeeeee! now press next", image: "assets/index/yespopup.jpg" }, //yes
                  49: { text: "BOOO!!!! bitch do it again", image: "assets/index/nopopup.jpg" } }; //no
} else if (currentPage === "page2.html") {
  cellImages = { 71: "assets/page2/cam.png", 75:  "assets/page2/clown.png",  
                 89:  "assets/page2/crosswalk.png",  7:  "assets/page2/duck.png", 
                 11:  "assets/page2/flower.png",  19:  "assets/page2/iceskate.png", 
                 32:  "assets/page2/paint.png",  35:  "assets/page2/sushi.png",
                 48:  "assets/page2/sweden.png" ,  53:  "assets/page2/wsp.png"        };
  specialCells = { 71: { text: "one of our dates (i think dumbo flea)! we walked around n took a lot of pics this day :) i really love the pics we bought ", image: "assets/page2/campop.png" },
                   75: { text: "1/12 chance btw (8prcnt). so so silly but had soo much fun w u. i love gambling on blind boxes w u. u def made up for this one by now", image: "assets/page2/clownpop.png" },
                   89: { text: "fire n iconic flicks. goated hard launch <3 these pictures r sooo hard even over a year later. i love taking photos of u ur my fav subject", image: "assets/page2/crosswalkpop.png" },
                   7: { text: "date we spent sm time tgt. the ducks under the bridge was so us. i bet in another life we r just 2 ducks chillin n eating grass or whatever they eat", image: "assets/page2/duckpop.png" },
                   11: { text: "our first date!! it was soo magical lol. its so fun just talking and talking w u i can never get tired of it", image: "assets/page2/flowerpop.png" },
                   19: { text: "u met my mother lolol. yummy jollibee n good vibes ice skating. we should totally go again before winter ends", image: "assets/page2/iceskatepopup.png" },
                   32: { text: "day we went to moma? we were exploringg i love exploring w u. u make going anywhere (even to car places) fun", image: "assets/page2/paintpop.png" },
                   35: { text: "miga w syl LOL. one of the early moments in our relationship. i love eating out w u n getting yummy food everywhere", image: "assets/page2/sushipop.png" },
                   48: { text: "one of our many ikea trips!! always iconic and fun no matter how many times we go. i like going to jersey gardens for potato corner after", image: "assets/page2/swedenpop.png" },
                   53: { text: "fire evening at wsp. yummy chicken i enjoyed hanging out w u. we took fire pics it's a core memory even tho it was so casual", image: "assets/page2/wsppop.png" } };
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
      <button id="close-popup">close</button>
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
