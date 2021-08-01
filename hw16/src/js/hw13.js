let nextPage = 1;

export async function renderPlanets() {
    let planets = null;
    let names = [];
    const planetLink = 'https://swapi.dev/api/planets/?page=' + nextPage;

    await fetch(planetLink)
        .then((response) => { return response.json() })
        .then((data) => {

            let planetName = '';
            planets = data.results;

            for (let i = 0; i < planets.length; i++) {
                planetName = planets[i].name;
                names.push(planetName);
            }
            document.getElementById('hw13').innerHTML = names;       
    })
}



