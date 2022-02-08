// Stats

var persitentHTMLStats = document.querySelector("#saved-stats");
var persitentStats = document.querySelector("#save-stats");

// Saves the inner html of stats to local storage
function saveStats() {
  let persistentDataStats = persitentStats.innerHTML;
  localStorage.setItem("stats", persistentDataStats);
  localItems();
}

// Appends the stats from the local storage to the inner html on the save page
function generateStats() {
  let generatedStats = localStorage.getItem("stats");
  if (!generatedStats) return;
  persitentHTMLStats.innerHTML = generatedStats;
}

// Openers

var persitentHTMLOpeners = document.querySelector("#saved-openers");
var persitentOpeners = document.querySelector("#save-openers");

// Saves the inner html of openers to local storage
function saveOpeners() {
  let persistentDataOpeners = persitentOpeners.innerHTML;
  localStorage.setItem("openers", persistentDataOpeners);
  localItems();
}

// Appends the openers from the local storage to the inner html on the save page
function generateOpeners() {
  let generatedOpeners = localStorage.getItem("openers");
  if (!generatedOpeners) return;
  persitentHTMLOpeners.innerHTML = generatedOpeners;
}

// Game

var persitentHTMLGame = document.querySelector("#saved-game");
var persitentGame = document.querySelector("#save-game");

// Saves the inner html of the game details to local storage
function saveGame() {
  let persistentDataGame = persitentGame.innerHTML;
  localStorage.setItem("game", persistentDataGame);
  localItems();
}

// Appends the game details from the local storage to the inner html on the save page
function generateGame() {
  let generatedGame = localStorage.getItem("game");
  if (!generatedGame) return;
  persitentHTMLGame.innerHTML = generatedGame;
}

// Checks the local storage, alerts the numbers of items (length)
function localItems() {
  alert("There are: " + localStorage.length + " items saved");
}

// Clears the local storage, reloads the page
function clearStorage() {
  localStorage.clear();
  location.reload();
}

// Commenting function
var post = document.getElementById("post-comment");
post.addEventListener("click", function () {
  var commentBoxContent = document.getElementById("comment-content").value;

  // Creating the li element,
  // appending text content from input to unordered list
  var commentLi = document.createElement("li");
  var commentText = document.createTextNode(commentBoxContent);

  commentLi.appendChild(commentText);
  document.getElementById("unordered-comments").appendChild(commentLi);
});

// like function
function likeFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}
