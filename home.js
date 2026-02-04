function createMovieCard(movie) {
    let card = document.createElement("div");
    card.classList.add("card");

    let castList = movie.cast.join(', ') 
    let genresList = movie.genres.join(', ')

    let textData =
        "<div class='movie-title'>" + movie.title + "</div>" +
        "<div class='movie-year'>Released: " + movie.year + "</div>";
    
    if (movie.cast) {
        textData += "<div class='movie-cast'>Cast: " + castList + "</div>";
    }
    textData += "<div class='movie-genres'>Genres: " + genresList + "</div>";

    card.innerHTML = textData;

    if (movie.thumbnail) {
        card.style.backgroundImage = "url(" + movie.thumbnail + ")";
    }

    return card;
}

function loadJSONMovies() {
    const req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status === 200) {
            let movies = JSON.parse(req.responseText);
            const gridContainer = document.getElementById('grid-container');

                movies.forEach(function(movie) {
                    gridContainer.appendChild(createMovieCard(movie));
                });
        }
    }

    req.open("GET", "./list.json", true);
    req.send();
}

function loadCustomMovies() {
    let customMovie = sessionStorage.getItem('customMovies');
    const customMovies = JSON.parse(customMovie);
    const gridContainer = document.getElementById('grid-container');

    if (gridContainer && customMovies.length > 0) {
        customMovies.forEach(function(movie) {
            gridContainer.appendChild(createMovieCard(movie));
        });
    }
}


const form = document.getElementById('addMovieForm');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const year = parseInt(document.getElementById('year').value);
        const genre = document.getElementById('genre').value;


        const newMovie = {
            title: title,
            year: year,
            publisher:publisher,
            genres: [genre],
            cast: []
        };


        let customMovie = sessionStorage.getItem('customMovies');
        let customMovies = JSON.parse(customMovie);
        customMovies.push(newMovie);
        sessionStorage.setItem('customMovies', JSON.stringify(customMovies));
        const result = document.querySelector('.result');
        result.style.display = 'block';


        setTimeout(()=>{
            window.location.href = 'index.html';
        }, 1000);
    });
}

window.addEventListener('DOMContentLoaded', function() {
    loadJSONMovies();
    loadCustomMovies();
});
