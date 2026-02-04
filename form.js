 console.log("form console");

 let form = document.querySelector("form");
 let submit = document.querySelector("submit");
 form.addEventListener("submit", function(e){
  e.preventDefault();
  let title = titleInput.value;
  let publisher = devInput.value;
  let releaseDate = releaseDateInput.value;
  let imgSrc = imgInput.value; 
  let newObj = {
    "id": getNextId(),
    "title" : title,
    "publisher" : publisher,
    "releaseDate" : releaseDate,
    "imgSrc" : imgSrc };
  submitData(newObj);
  form.reset();

});



console.log("js started");

var data;
var grid = document.querySelector(".grid-container");

// LOAD DATA (localStorage first, otherwise XHR)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("JSON.json"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log("Loaded from JSON.json");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter data to localStorage");

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "./JSON.json", true);
  xhttp.send();
}

// RENDER CARDS
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (game) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='game-title'>" + game.title + "</div>" +
      "<div>Publisher: " + game.publisher + "</div>" +
      "<div>Release Date: " + game.releaseDate + "</div>";

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}
