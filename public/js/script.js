//Controls accordion feature 
// import { 
//     Collapse,
//     initTE,
// } from "tw-elements";

// initTE({ Collapse });

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

global.document = new JSDOM("index.html").window.document;

const data = require('../../seeds/planetData.json');
let countdownDisplay = document.getElementById("countdown");

//write Portal function here
function displayPortal() {
    var portalButton = document.querySelector("portalButton");
    portalButton.style.visibility = 'visible';
};

function getData(){
var lightyears = (data[2].distance_light_year);
var isHabitable = data[0].habitable;

//data [] will be changed based on user input 
console.log(lightyears);
console.log(isHabitable);

timerCountdown(lightyears);
// habitablePlanet(isHabitable);
};

function timerCountdown(lightyears) {
    let count = Math.round(lightyears);
    const timer = setInterval(function () {
            if(countdownDisplay){
                document.getElementById("countdownDisplay").textContent = count;
               }
            count--;
            
            console.log(count);
            var catchTimer = Math.round(lightyears) - 10;
            
            if (count === catchTimer) {
                console.log("Would you like to skip ahead?");
                console.log("Pop up button to skip ahead");
                displayPortal();
            } else if (count === 0) {
                clearInterval(timer);
                console.log("You have arrived!");
            }
        }, 1000);        
};

function habitablePlanet(isHabitable){
console.log(isHabitable);

if(isHabitable){
    //missionSuccess will link to the counter on the dashboard 
    // let habitability = document.getElementById("mission-success").value;
    // habitability.textContent = missionSuccess;
    missionSuccess++;
    
    console.log("Congrats! You have found a habitable planet!")
} else {
    console.log("Keep looking!")
}
};
getData();


