const container = document.querySelector('.container');
const navigationBox = document.querySelector('.navigation');
const header = document.querySelector('.header-btns');

let nextPage = 1;

async function renderPlanets() {
    localStorage.setItem('page', 'planets');
    let planets = null;
    const language = document.querySelector("#translate").innerHTML;
    const planetLink = 'https://swapi.dev/api/planets/?page=' + nextPage;

    fetch(planetLink)
        .then((response) => { return response.json() })
        .then((data) => {

            let planetName = '';
            planets = data.results;

            const wookiePlanetLinks = data.results.map((planet) => planet.url + `?format=wookiee`);

            if (language === 'Translate to Wookie') {

                for (let i = 0; i < planets.length; i++) {
                    planetName = planets[i].name;
                    drawPlanets(planetName);
                }
            } else {
                for (wookieLink of wookiePlanetLinks) {

                    fetch(wookieLink).then((result) => result.json())
                        .then((wookieData) => {  
                            planetName = wookieData.whrascwo;
                            drawPlanets(planetName);
                        });
                }
            }
    })
}

function drawPlanets(planetName) {
    const newPlanet = document.createElement("div");
    newPlanet.classList.add("information-card");
    newPlanet.innerHTML = `<div class="img-box">
                <img src="./images/planet.jpg" alt="planet">
            </div>
            <div class="information">
                <p class="name">${planetName}</p>
            </div>`
    container.append(newPlanet);
}

function createNextBtn() {
    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next");
    nextBtn.innerHTML = 'Next page';
    header.append(nextBtn);
}

function createPreviousBtn() {
    const previousBtn = document.createElement("button");
    previousBtn.classList.add("previous");
    previousBtn.innerHTML = 'Previous page';
    header.append(previousBtn);
}

async function displayPlanets() {
    navigationBox.remove();
    createPreviousBtn();
    createNextBtn();
    renderPlanets();

    document.querySelector(".next").addEventListener("click", nextPageOnClick);
    document.querySelector(".previous").addEventListener("click", previousPageOnClick);
}

document.querySelector('#planets-btn').addEventListener("click", displayPlanets);

function nextPageOnClick() {
    nextPage += 1;
    if (nextPage > 6) { nextPage = 6 }
    container.innerHTML = '';
    renderPlanets();
}

function previousPageOnClick() {
    if (nextPage > 1) {
        nextPage = nextPage - 1;
    } else { nextPage = 1 }
    container.innerHTML = '';
    renderPlanets();
}

async function renderCharacters(selectedFilm) {
    localStorage.clear();
    let characters = null;
    const language = document.querySelector("#translate").innerHTML;
    const filmLink = 'https://swapi.dev/api/films/' + selectedFilm;
    console.log(language)
       
    fetch(filmLink)
        .then((response) => { return response.json() })
        .then((data) => {
            characters = data.characters;
            characters.forEach(character => {
                let newCharacter;

                (language === 'Translate to English') ? newCharacter = character + `?format=wookiee`
                    : newCharacter = character; 

                fetch(newCharacter)
                    .then((response) => { return response.json() })
                    .then((result) => {
                        let informationCard = document.createElement("div");
                        informationCard.classList.add("information-card");
                        let imageSrc = character.substr(-3, 2).replace(/\D+/g, "");
                        let gender = (result.gender === 'male' || result.rrwowhwaworc === 'scraanwo') ? 
                            String.fromCodePoint('0x2642') :
                            (result.gender === 'female' || result.rrwowhwaworc === 'wwwoscraanwo') ? 
                            String.fromCodePoint('0x2640') :
                            String.fromCodePoint('0x26A7');
                        const name = (language === 'Translate to English') ? result.whrascwo : result.name;
                        const age = (language === 'Translate to English') ? 
                        result.rhahrcaoac_roworarc: result.birth_year;

                        informationCard.innerHTML = `<div class="img-box">
                            <img src="./images/${imageSrc}.jpg" alt="">
                        </div>
                        <div class="information">
                            <p class="name">${name}</p>
                            <p class="age">${age}</p>
                            <p class="gender">${gender}</p>
                        </div>`

                        container.append(informationCard);
                    })
            });
        })
}

function drawCharacters(selectedFilm) {
    navigationBox.remove();
    renderCharacters(selectedFilm);
}
let filmOption = document.getElementById("char-options");

document.querySelector("#show-characters").addEventListener("click", 
    () => { drawCharacters(filmOption.value) });


const translateBtn = document.querySelector("#translate");
let translateBtnClasses = translateBtn.classList;

function translate() {
    let languageBtn = translateBtnClasses.toggle("wookiee");
    const currentPage = localStorage.getItem('page');

    if (languageBtn) {
        translateBtn.innerHTML = `Translate to English`;
        container.innerHTML = '';
        switch (currentPage) {
            case "planets":
                renderPlanets();
              break;
            default: 
            drawCharacters(filmOption.value);
              break;}

    } else {
        translateBtn.innerHTML = `Translate to Wookie`;
        container.innerHTML = '';
        switch (currentPage) {
            case "planets":
                renderPlanets();
              break;
            default: 
            drawCharacters(filmOption.value);
              break;}
        
    }
}

document.querySelector("#translate").addEventListener("click", translate);

function returnHome() {
    localStorage.clear();
    window.location.reload();
}

document.querySelector(".home").addEventListener("click", returnHome);



