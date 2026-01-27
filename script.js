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
  cellImages = { 4: "assets/page3/drink.png", 20:  "assets/page3/finch.png",  
                 25:  "assets/page3/fish.png",  97:  "assets/page3/fish2.png", 
                 28:  "assets/page3/flower1.png",  93:  "assets/page3/flower2.png", 
                 32:  "assets/page3/panda.png",  54:  "assets/page3/pigeon.png",
                 61:  "assets/page3/subway.png" ,  67:  "assets/page3/tiger.png" ,  69:  "assets/page3/tram.png"          };
  specialCells = { 4: { text: "i really enjoyed this day going to soo many cafes. ty always for coming w me to do my stupid shit like buying many drinks LOL", image: "assets/page3/drinkpop.png" },
                   20: { text: "im soo glad we ended up going here. seeing all the animals w u was sm fun and the finches were soo cutesie. also the toucans were pretty cool and the lemon cake w poprocks!!!!", image: "assets/page3/finchpop.png" },
                   25: { text: "one of the first times we went to coex! the aquarium was sooo pretty and u took my goated pfp hehe. also the otter and the platypus plush u keep tryna put in ur mouth", image: "assets/page3/fishpop.png" },
                   97: { text: "i had so much fun going to this cafe! ty for coming w me bc yk i was eyeing it alllll semester. cant believe my dad said u were a girl", image: "assets/page3/fish2pop.png" },
                   28: { text: "the lake we saw the cherry blossoms at! it was genuinely soo pretty. all the cherry blossoms but ur the prettiest of them all (wink)", image: "assets/page3/flower1pop.png" },
                   93: { text: "went to the cherry blossom festival on the last day! it rly nice and im so glad i went w u. its one of my fav memories in kr :)", image: "assets/page3/flower2pop.png" },
                   32: { text: "ty for being the push that got us to go LOL. i loved seeing pochacco n getting the exclusive. the weather was so ass but the whole day was so memorable and i wouldnt have had it any other way", image: "assets/page3/pandapop.png" },
                   54: { text: "im so so sorry i shoulda listened to u ... stl sorry ab the pigeon shit... but it was still a rly good day and i had sm fun w u getting food n walking around", image: "assets/page3/pigeonpop.png" },
                   61: { text: "fire AF photobooth! it was so us i love this one so much. it was so cutesie. our story post was also so fire. cant wait to do many more photobooths w u", image: "assets/page3/subwaypop.png" },
                   67: { text: "horangi ku photobooth! i enjoyed taking a class w u n doing nothing tgt in it LOL. korea was sm fun bc u were there too <33", image: "assets/page3/tigerpop.png" },
                   69: { text: "busan trip was sm fun. had our ups and downs but will always be a core memory w u. exploring everything and trying sm food is smth i hope to do with u for the rest of our lives", image: "assets/page3/trampop.png" } };
} else if (currentPage === "page4.html") {
  cellImages = { 8: "assets/page4/espresso.png", 16:  "assets/page4/fortnite.png",  
                 24:  "assets/page4/fuji.png",  49:  "assets/page4/matcha.png", 
                 51:  "assets/page4/noodles.png",  63:  "assets/page4/pochacco.png", 
                 87:  "assets/page4/skytree.png", };
  specialCells = {  8: { text: "espresso had a lot of fun hanging out w u. im sure she misses u rn. i loved having u over and the days we could cuddle n hang like that over the summer made me at peace", image: "assets/page4/espressopop.png" },
                   16: { text: "the start of the fortnite grind LOL i rly enjoyed calling with u at nights it made me feel more connected to u. and obvs i love to play fort w u lets play later LOL", image: "assets/page4/fortnitepop.png" },
                   24: { text: "mt fuji dayyy i had a lot of fun w u driving :) it made me so happy to see u so happy. truly one of the most memorable days of my life", image: "assets/page4/fujipop.png" },
                   49: { text: "lowk didnt have pics of us from japan LOL but i rly enjoyed exploring despite the heat. i hope we can come back to japan and other countries tgt", image: "assets/page4/matchapop.png" },
                   51: { text: "going to the cup noodle place was soso cool im so glad i went w u. one of my fav souvenirs from the trip (besides the pochaccos obvs) n u got the car this day!", image: "assets/page4/noodlespop.png" },
                   63: { text: "ty for the pochacco :P i love him sm. i missed u a lot while u were in china but im glad we could stl talk from time to time. ur my everything ken <333", image: "assets/page4/pochaccopop.png" },
                   87: { text: "the nicest hotel bro. spending the nights unwinding w u as we watch reels n eat convenience store food was so great. lying down in bed and waking up next to u is smth i wnna do forever", image: "assets/page4/skytreepop.png" } };
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
