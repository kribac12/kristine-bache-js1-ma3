const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=35298ba4640e4dffb21c9ce2cd613d49";
const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results.results);

    const facts = results.results;

    resultsContainer.classList.remove("loader");

    for (let i = 0; i < facts.length; i++) {
      resultsContainer.innerHTML += `<section class="results">${facts[i].name}</section>`;
      resultsContainer.innerHTML += `<section class="results">${facts[i].rating}</section>`;
      resultsContainer.innerHTML += `<section class="results">${facts[i].tags.length}</section>`;
      if (i === 7) {
        break;
      }
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = alert("Error, try again.");
  }
}

getGames();
