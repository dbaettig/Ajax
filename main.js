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

const buttons = document.querySelectorAll('button');
console.log(buttons);
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

// ------- SHOWS ALL MOVIES --------//

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


// --------- SHOWS MOVIES IN SECTION COMPETITION ------//

competitionButton.addEventListener('click', function () {
let info = " ";
var section = 'Competition';
var mySections = allFilms.filter(function (each) {
    return each.sectionName == section;
});
for (var i = 0; i < mySections.length; i++) {

    info += `

        <div class="films">
            <img src = ${mySections[i].filmPreviewImage}>
            <h3> ${mySections[i].filmName} </h3>
            <p> ${mySections[i].filmDirector} </p> 
            <p> ${mySections[i].sectionName} </p>

        </div>
        `;

    infoElement.innerHTML = info;
}
    })



// --------- SHOWS MOVIES IN SECTION TWILIGHT ZONE ------//

twilightZoneButton.addEventListener('click', function () {
    let info = " ";
    var section = 'Twilight Zone';
    var mySections = allFilms.filter(function (each) {
        return each.sectionName == section;

    });
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


// --------- SHOWS MOVIES IN SECTION DOCUMANIA ------//

documaniaButton.addEventListener('click', function () {
    let info = " ";
    var section = 'Documania';
    var mySections = allFilms.filter(function (each) {
    return each.sectionName == section;

     });
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

// --------- SHOWS MOVIES IN SECTION American Indie ------//

americanIndieButton.addEventListener('click', function () {
    let info = " ";
    var section = 'American Independents';
    var mySections = allFilms.filter(function (each) {
    return each.sectionName == section;

     });
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
