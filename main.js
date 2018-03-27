
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
}

function executeThisCodeifXHRFails(){
    console.log("This is wrong");
}

const buildDomString = (theArray) => {
    theArray.forEach((animals) => {
    let domString = "";
    domString += `<h1>${animals.name}</h1>`
    printToDom(domString, "zoo")
    })
    
};

function executeThisCodeAfterFileLoaded(){
    const data = JSON.parse(this.responseText);
    buildDomString (data.animals);
    }
    const startApplication = () => {
        let myRequest = new XMLHttpRequest();
         myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
         myRequest.addEventListener("error", executeThisCodeifXHRFails);
         myRequest.open("GET", "animals.json");
         myRequest.send();
    }

    startApplication();