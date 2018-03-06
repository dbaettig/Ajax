const infoElement = document.getElementById('infoElement');
const input = document.getElementById('input');

const competitionButton = document.getElementById('competition');
const americanIndieButton = document.getElementById('americanIndependents');
const documaniaButton = document.getElementById('documania');
const iconsButton = document.getElementById('icons');
const impactButton = document.getElementById('impact');
const openZoneButton = document.getElementById('openZone');
const shortFilmCompetitionButton = document.getElementById('shortFilmCompetition');
const spotlightButton = document.getElementById('spotlight');
const twilightZoneButton = document.getElementById('twilightZone');

let allFilms = [];
let allSections = [];

fetchFilms();

function fetchFilms() {

    fetch('https://cors-anywhere.herokuapp.com/http://api.stockholmfilmfestival.se/v1/films/festival_list/festival_id/29/format/json/API-Key/70kbAllS0oDsaI9ho5oaRL3Ey7CdqSdkRB0Pmihk')
        .then(function (response) {
            return response.json();
        })

        .then(function (films) {
            displayFilms(films);
            allFilms = films;
        console.log(films)

        })

        .catch(function (error) {
            console.log(error);
        })
}


function displayFilms(films) {

    let info = '';
    for (var i = 0; i < films.length; i++) {

        // const IMAGESIZE = (320 x 180);
        info += `
        <div class="films">
            
            <h3> ${films[i].filmName} </h3>
            <p> ${films[i].filmDirector} </p> 
            <p> ${films[i].sectionName} </p>

        </div>
        `;
        infoElement.innerHTML = info;
    }

}

competitionButton.addEventListener('click', function () {
    let info = " ";
    var mySections = allFilms.filter(function (each) {
        return each.sectionName == "Competition";

    });
    console.log(mySections);
    
    for (var i = 0; i < mySections.length; i++) {

    info += `

        <div class="films">
            
            <h3> ${mySections[i].filmName} </h3>
            <p> ${mySections[i].filmDirector} </p> 
            <p> ${mySections[i].sectionName} </p>

        </div>
        `;
        
    infoElement.innerHTML = info;
    }

})


//input.addEventListener('change', function () {
//
//        const inputValue = input.value;
//        const li = document.createElement('li')
//        li.innerText = input.value

//
//                    console.log(allFilms[i].filmName);
//                    console.log(allFilms[i].filmDirector);
//                    console.log(allFilms[i].sectionName);

//                   info += `
//        <div class="films">
//            
//            <h3> ${allFilms[i].filmName} </h3>
//            <p> ${allFilms[i].filmDirector} </p> 
//            <p> ${allFilms[i].sectionName} </p>
//
//        </div>
//        `;
//                    infoElement.innerHTML = info;
//                }

//            }
//        })
