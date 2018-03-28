
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

const animalsEscaped = (e) => {
   const badAnimalButtonContainer = e.target.parentNode;
    showCanivores();
    showVegetables();
    showFoundButton(badAnimalButtonContainer);
};
const showFoundButton = (buttonContainder) => {
    buttonContainder.innerHTML = `<button id= "found">Found</button>`;
    initalizeFoundButton();
};

const initalizeFoundButton = () => {
    const foundButton = document.getElementById('found');
    foundButton.addEventListener('click', () => {
        const animals = document.getElementsByClassName('animal');
        for(let m=0; m<animals.length; m++){
            animals[m].children[3].innerHTML = `<button class ="escaped">Escaped</buttons>`;
            animals[m].classList.remove('red');
            animals[m].classList.remove('green');
        }
        addEscapedEventListeners();
    });
};

const showCanivores = () => {
    const carnivores = document.getElementsByClassName('carnivore');
    for (let j = 0; j < carnivores.length; j++){
        carnivores[j].children[3].innerHTML = " ";
        carnivores[j].classList.add('red');
        }
    };

const initalizeEatMeButtons = () => {
    const eatMeButtons = document.getElementsByClassName('eat-me');
    for (let n = 0; n < eatMeButtons.length; n++){
        eatMeButtons[n].addEventListener('click', itsAlreadyBeenEaten);
    }
};

const itsAlreadyBeenEaten = (e) => {
 const currentNumber = e.target.parentNode.parentNode.children[1].innerHTML;
 const newNumber = currentNumber *1 -1;
 e.target.parentNode.parentNode.children[1].innerHTML = newNumber;
//  can be currentNumber = newNumber;
};

const showVegetables = ()=> {
    const vegetables = document.getElementsByClassName('vegetables');
    for (let q = 0; q < vegetables.length; q++) {
        vegetables[q].children[3].innerHTML = `<button class="eat-me">EAT ME!!!</button>`;
        vegetables[q].classList.add('green');
    }
    initalizeEatMeButtons();
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
    

    
