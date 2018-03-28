
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
}

const buildDomString = (theArray) => {
    theArray.forEach((animals) => {
    let domString = "";
    domString += `<h1>${animals.name}</h1>`
    printToDom(domString, "zoo")
    })
    
};
const cardAnimals = (animalsArray) => {
    let domString = '';
    animalsArray.forEach((animals) => {
        if(animals.isCarnivore) {
            domString += `<div class = "animal carnivore">`;
        } else{
            domString += `<div class = "animal vegetables">`;
        }
    domString +=   `<h1>${animals.name}</h1>`;
    domString +=   `<h3>${animals.number} </h3>`;
    domString +=   `<img class="animal-image" src="${animals.imageUrl}">`;
    domString +=   `<div class ="button-container">`;
    domString +=     `<button class="escaped">Escaped</button>`;
    domString +=   `</div>`;
    domString += `</div>`;
    });
    printToDom(domString, 'zoo');
}

const addEscapedEventListeners = () => {
    const escapedButtons = document.getElementsByClassName("escaped");

    for (let i = 0; i < escapedButtons.length; i++) {
        escapedButtons[i].addEventListener('click', animalsEscaped)
    }
    // animalsEscaped();
};

const animalsEscaped = () => {
    showCanivores();
    showVegetables()
};

const showCanivores = () => {
    const carnivores = document.getElementsByClassName('carnivore');
    for (let j = 0; j < carnivores.length; j++){
        carnivores[j].children[3].innerHTML = " ";
        carnivores[j].classList.add('red');
        }
    };

const showVegetables = ()=> {
    const vegetables = document.getElementsByClassName('vegetables');
    for (let q = 0; q < vegetables.length; q++) {
        vegetables[q].children[3].innerHTML = "";
        vegetables[q].classList.add('green');
    }
};

function executeThisCodeAfterFileLoaded(){
    const data = JSON.parse(this.responseText);
    cardAnimals (data.animals);
    addEscapedEventListeners(); 
    }

    function executeThisCodeifXHRFails(){
        console.log("This is wrong");
    }
    const startApplication = () => {
        let myRequest = new XMLHttpRequest();
         myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
         myRequest.addEventListener("error", executeThisCodeifXHRFails);
         myRequest.open("GET", "animals.json");
         myRequest.send();
    }

    startApplication();
    

    
