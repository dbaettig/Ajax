const infoElement = document.getElementById('infoElement');
const input = document.getElementById('input');
const category = document.querySelector('#category');
const showAllButton = document.getElementById('showAll');

let allFilms = [];
let allFilmDesc = [];
let id = " ";


fetchFilms();


function fetchFilms() {

    fetch('https://cors-anywhere.herokuapp.com/http://api.stockholmfilmfestival.se/v1/films/festival_list/festival_id/29/format/json/API-Key/70kbAllS0oDsaI9ho5oaRL3Ey7CdqSdkRB0Pmihk')
        .then(function (response) {
            return response.json();
        })

        .then(function (films) {
            displayFilms(films);
            allFilms = films;
    
        })

        .catch(function (error) {
            console.log(error);
        })
}


function fetchFilmDesc(id) {

    fetch(`https://cors-anywhere.herokuapp.com/http://api.stockholmfilmfestival.se/v1/films/film/film_id/${id}/festival_id/29/format/json/API-Key/70kbAllS0oDsaI9ho5oaRL3Ey7CdqSdkRB0Pmihk`)

        .then(function (response) {
            return response.json();
        })

        .then(function (filmDesc) {
            displayFilmDesc(filmDesc);
            allFilmDesc = filmDesc;

            let info = " ";
            info +=

                ` 
        <div class="filmDescription" id = "${filmDesc.filmId}">
            <h2> ${filmDesc.filmName} </h2>
            <h3> ${filmDesc.sectionName} </h3>
            <h4> Director: ${filmDesc.filmDirector} </h4>
            <h4> Country: ${filmDesc.filmCountry_en} </h4>
            <h4> <a href ="https://www.youtube.com/watch?v=${filmDesc.filmYoutubeId}">Trailer</a></h4>
            <p> ${filmDesc.filmDescription_en} </p> 
         </div> `

            ;
        

            infoElement.innerHTML = info;

        })

        .catch(function (error) {
            console.log(error);
        })
}


function displayFilmDesc(filmDesc) {

}


// ------- SHOWS ALL MOVIES --------//

function displayFilms(allFilms) {

    let info = '';
    for (var i = 0; i < allFilms.length; i++) {
        let id = allFilms[i].filmId;
       
        info +=
            `
         <div class="films" id = "${allFilms[i].filmId}">
            <img src="${allFilms[i].filmPosterImage.replace('[IMAGESIZE]', '600x857')}">
            <h3> ${allFilms[i].filmName} </h3>
            <p> Director: ${allFilms[i].filmDirector} </p>
            <p> Section: ${allFilms[i].sectionName} </p> 
        </div> 
        `;
        infoElement.innerHTML = info;
    }


}

// -----SHOW ALL BUTTON GOES BACK TO SHOW ALL MOVIES -----//


showAllButton.addEventListener('click', function () {

    let info = '';
    for (var i = 0; i < allFilms.length; i++) {

        info +=

            `
         <div class="films" id = "${allFilms[i].filmId}">
            <img src="${allFilms[i].filmPosterImage.replace('[IMAGESIZE]', '600x857')}">
            <h3> ${allFilms[i].filmName} </h3>
            <p> Director: ${allFilms[i].filmDirector} </p>
            <p> Section: ${allFilms[i].sectionName} </p>
        </div>
       
    `;
        infoElement.innerHTML = info;
    }

});

//------ ENTER TO SEARCH ----- //
input.addEventListener('keydown', function handleKeydown(e) {
    var text = input.value;
    let info = " ";
    if (e.keyCode === 13) {
        if (text !== '') {
            searchFilm();
            input.value = ' ';
        }
    }
});

// ----- SEARCH INPUT FOR MOVIE TITLE ---- //

searchButton.addEventListener('click', searchFilm);

function searchFilm() {

    const searchButton = document.getElementById('searchButton');
    let info = '';
    const inputValue = input.value;
    for (var i = 0; i < allFilms.length; i++) {

        if (inputValue.toUpperCase().split(' ').join('') ==
            allFilms[i].filmName.toUpperCase().split(' ').join('')) {

            info += `
        <div class="films" id = "${allFilms[i].filmId}">
            <img src="${allFilms[i].filmPosterImage.replace('[IMAGESIZE]', '600x857')}">
            <h3> ${allFilms[i].filmName} </h3>
            <p> Director: ${allFilms[i].filmDirector} </p> 
            <p> Section: ${allFilms[i].sectionName} </p>
   
        </div>
        `;
            infoElement.innerHTML = info;

        }
    }
}



//------ EVENTLISTENER FOR ALL CATEGORY BUTTONS -----//

category.addEventListener('click', getSection);


function getSection(section) {
    if (section.target !== section.currentTarget) {
        var clickedSection = section.target.id;
    }
    let info = " ";

    if (clickedSection == 'americanIndependents') {
        var section = 'American Independents';

    } else if (clickedSection == 'competition') {
        var section = 'Competition';

    } else if (clickedSection == 'documania') {
        var section = 'Documania';

    } else if (clickedSection == 'icons') {
        var section = 'Icons';

    } else if (clickedSection == 'impact') {
        var section = 'Impact';

    } else if (clickedSection == 'openZone') {
        var section = 'Open Zone';

    } else if (clickedSection == 'shortFilmCompetition') {
        var section = 'Short Film Competition';

    } else if (clickedSection == 'spotlight') {
        var section = 'Spotlight';

    } else if (clickedSection == 'twilightZone') {
        var section = 'Twilight Zone';
    }
    var mySections = allFilms.filter(function (each) {
        return each.sectionName == section;
    });

    for (var i = 0; i < mySections.length; i++) {

        info += `

        <div class="films" id = "${mySections[i].filmId}">
            <img src="${mySections[i].filmPosterImage.replace('[IMAGESIZE]', '600x857')}">
            <h3> ${mySections[i].filmName} </h3>
            <p> Director: ${mySections[i].filmDirector} </p> 
            <p> Section: ${mySections[i].sectionName} </p>
        </div>
        `;

        infoElement.innerHTML = info;
    }
}




// ----- EVENTLISTENER FOR MORE INFO ON MOVIES ------//


infoElement.addEventListener('click', function (div) {

    if (div.target.className == "films") {
        var replacedId = div.target.id;

        fetchFilmDesc(replacedId)

    }

})