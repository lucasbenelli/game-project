console.log("js console");
let button = document.querySelector("#show-games");
// let gameData = document.querySelector();
let grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function (){
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    let games = JSON.parse(xhttp.responseText);
    console.log(games[0]);

games.forEach(function(game){
let card = document.createElement("div");
card.classList.add("card");

let textGame=
"<div class = 'game-title'>" + game.title + "</div>"+
"<span>" +
"Publisher: " + game.publisher + "<br>"+
"<span>" +
"Release Date: " + game.releaseDate + "<br>" +
"Needs Research:"  +
"</span>";

card.innerHTML = textGame;
if(game.imgSrc){
  card.style.backgroundImage = "url(" + game.imgSrc +")"
}

grid.appendChild(card);
});
  }
};

xhttp.open("GET", "JSON.json", true);
xhttp.send();


// button.addEventListener('click',function(){
//     const container = document.getElementById("games");
//       container.innerHTML = "";

//       gamesData.forEach(game => {
//         const card = document.createElement("div");
//         card.className = "game-card";

//         card.innerHTML = `
//           <h3>${game.title}</h3>
//           <p><span class="label">Publisher:</span> ${game.publisher}</p>
//           <p><span class="label">Genre:</span> ${game.genre}</p>
//           <p><span class="label">Score:</span> ${game.score}</p>
//         `;

//         container.appendChild(card);
//       });
    
// });
      