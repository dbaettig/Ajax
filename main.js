const infoElement = document.getElementById('infoElement');
const input = document.getElementById('input');
const category = document.querySelector('#category');
const searchButton = document.getElementById('searchButton');

let allFilms = [];


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

searchButton.addEventListener('click', function(){
     
    const inputValue = input.value;  
    
    let info = ' ';
    for (var i = 0; i < allFilms.length; i++) {
         
         
    if(inputValue == allFilms[i].filmName || films[i].filmName){ 
        
     
            
 info += `
        <div class="films">
            
            <h3> ${allFilms[i].filmName} </h3>
            <p> ${allFilms[i].filmDirector} </p> 
            <p> ${allFilms[i].sectionName} </p>

        </div>
        `;
        infoElement.innerHTML = info;
    }
     }
     });
 

 
//------ EVENTLISTNER FOR ALL CATEGORY BUTTONS -----//
category.addEventListener('click', getSection);


function getSection(section) {
    if (section.target !== section.currentTarget) {
        var clickedSection = section.target.id;
    }
    let info = " ";
    
    if(clickedSection == 'americanIndependents'){
    var section = 'American Independents';
        
    }else if(clickedSection == 'competition'){
    var section = 'Competition';
        
    }else if(clickedSection == 'documania'){
        var section = 'Documania';
        
    }else if(clickedSection == 'icons'){
    var section = 'Icons';
        
    }else if(clickedSection == 'impact'){
    var section = 'Impact';
        
    }else if(clickedSection == 'openZone'){
    var section = 'Open Zone';
        
    }else if(clickedSection == 'shortFilmCompetition'){
    var section = 'Short Film Competition';
        
    }else if(clickedSection == 'spotlight'){
    var section = 'Spotlight';
        
    }else if(clickedSection == 'twilightZone'){
    var section = 'Twilight Zone';
    }
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
    }


