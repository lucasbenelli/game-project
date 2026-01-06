let button = document.querySelector("#show-games");
let gameData = document.querySelector();

button.addEventListener('click',function(){
    const container = document.getElementById("games");
      container.innerHTML = "";

      gamesData.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
          <h3>${game.title}</h3>
          <p><span class="label">Publisher:</span> ${game.publisher}</p>
          <p><span class="label">Genre:</span> ${game.genre}</p>
          <p><span class="label">Score:</span> ${game.score}</p>
        `;

        container.appendChild(card);
      });
    
});
      