console.log("js started");

var data;
var grid = document.querySelector("#grid-container");

// LOAD DATA (localStorage first, otherwise XHR)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log("Loaded from list.json");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter data to localStorage");

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "list.json", true);
  xhttp.send();
}

// RENDER CARDS
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (movie) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='game-title'>" + movie.title + "</div>" +
      "<div>Genres: " + movie.genres + "</div>" +
      "<div>Release Year: " + movie.year + "</div>";

    card.innerHTML = textData;
    if (movie.thumbnail) {
        card.style.backgroundImage = "url(" + movie.thumbnail + ")";
    }
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}
var form = document.querySelector("form");
var titleInput = document.querySelector("#title");
var yearInput = document.querySelector("#year");
var genreInput = document.querySelector("#genre");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    title: titleInput.value,
    genres: genreInput.value,
    year: yearInput.value
  };

  data.push(newObj);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  // Only render if grid exists on this page
  if (document.querySelector("#grid-container")) {
    makeCards();
  }
  form.reset();
});

































// function createMovieCard(movie) {
//     let card = document.createElement("div");
//     card.classList.add("card");

//     let castList = movie.cast.join(', ') 
//     let genresList = movie.genres.join(', ')

//     let textData =
//         "<div class='movie-title'>" + movie.title + "</div>" +
//         "<div class='movie-year'>Released: " + movie.year + "</div>";
    
//     if (movie.cast) {
//         textData += "<div class='movie-cast'>Cast: " + castList + "</div>";
//     }
//     textData += "<div class='movie-genres'>Genres: " + genresList + "</div>";

//     card.innerHTML = textData;

//     if (movie.thumbnail) {
//         card.style.backgroundImage = "url(" + movie.thumbnail + ")";
//     }

//     return card;
// }

// function loadJSONMovies() {
//     const req = new XMLHttpRequest();

//     req.onreadystatechange = function() {
//         if (req.readyState === 4 && req.status === 200) {
//             let movies = JSON.parse(req.responseText);
//             const gridContainer = document.getElementById('grid-container');

//                 movies.forEach(function(movie) {
//                     gridContainer.appendChild(createMovieCard(movie));
//                 });
//         }
//     }

//     req.open("GET", "./list.json", true);
//     req.send();
// }
// let customMovies = localStorage.getItem('customMovies');

// function loadCustomMovies() {
    
//     const gridContainer = document.getElementById('grid-container');

//     if (gridContainer && customMovies.length) {
//         customMovies.forEach(function(movie) {
//             gridContainer.appendChild(createMovieCard(movie));
//         });
//     }
// }


// const form = document.getElementById('addMovieForm');
// if (form) {
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const title = document.getElementById('title').value;
//         const year = parseInt(document.getElementById('year').value);
//         const genre = document.getElementById('genre').value;


//         const newMovie = {
//             title: title,
//             year: year,
//             publisher:publisher,
//             genres: [genre],
//             cast: []
//         };


//         let customMovie = sessionStorage.getItem('customMovies');
//         let customMovies = JSON.parse(customMovie);
//         customMovies.push(newMovie);
//         sessionStorage.setItem('customMovies', JSON.stringify(customMovies));
//         const result = document.querySelector('.result');
//         result.style.display = 'block';


//         setTimeout(()=>{
//             window.location.href = 'index.html';
//         }, 1000);
//     });
// }

// window.addEventListener('DOMContentLoaded', function() {
//     loadJSONMovies();
//     loadCustomMovies();
// });
