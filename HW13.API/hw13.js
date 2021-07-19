const container = document.querySelector('.container');
const navigationBox = document.querySelector('.navigation');
const header = document.querySelector('.logo').parentElement;

let nextPage = 1;

function renderPlanets () {
    let planets = null;
    const planetLink = 'https://swapi.dev/api/planets/?page='+ nextPage;

    fetch (planetLink)
    .then((response) => {return response.json()})
    .then((data) => {
        planets = data.results;

        for (let i = 0; i < planets.length; i++) {
            let newPlanet = document.createElement("div");
            newPlanet.classList.add("information-card");
            newPlanet.innerHTML = `<div class="img-box">
                        <img src="./images/planet.jpg" alt="planet">
                    </div>
                    <div class="information">
                        <p class="name">${planets[i].name}</p>
                </div>`
            container.append(newPlanet);
        }
    }) 
}

async function displayPlanets () {
    navigationBox.remove();
    
    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next");
    nextBtn.innerHTML = 'Next page';
    header.append(nextBtn);

    renderPlanets ();    
  
    document.querySelector(".next").addEventListener("click", nextPageOnClick); 
}

document.querySelector('#planets-btn').addEventListener("click", displayPlanets);

function nextPageOnClick () {
    nextPage += 1;
    if(nextPage > 6) {nextPage = 6}
    container.innerHTML = '';
    renderPlanets ();
}

async function renderCharacters (selectedFilm) {
    let characters = null;
    const filmLink = 'https://swapi.dev/api/films/'+ selectedFilm;

    fetch (filmLink)
    .then((response) => {return response.json()})
    .then((data) => {
        characters = data.characters;
        characters.forEach(character => {
            fetch(character)
                .then((response) => {return response.json()})
                .then((result) =>{
                    let informationCard = document.createElement("div");
                    informationCard.classList.add("information-card");
                    let imageSrc = character.substr(-3, 2).replace(/\D+/g,"");
                    let gender = (result.gender === 'male') ? String.fromCodePoint('0x2642') :
                        (result.gender === 'female') ? String.fromCodePoint('0x2640') : 
                        String.fromCodePoint('0x26A7');
                    
                    informationCard.innerHTML = `<div class="img-box">
                            <img src="./images/${imageSrc}.jpg" alt="">
                        </div>
                        <div class="information">
                            <p class="name">${result.name}</p>
                            <p class="age">Age: ${result.birth_year}</p>
                            <p class="gender">${gender}</p>
                        </div>`
                    
                    container.append(informationCard);
                })
        });
    }) 
}

function drawCharacters (selectedFilm) {
    navigationBox.remove();
    renderCharacters (selectedFilm);
}
let filmOption = document.getElementById("char-options");

document.querySelector("#show-characters").addEventListener("click", () => 
    {drawCharacters(filmOption.value)});

//Wookiee
//https://swapi.dev/api/people/54/?format=wookiee








