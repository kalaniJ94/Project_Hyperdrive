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
var countdownDisplay = document.getElementById("countdown");
var missionCount = document.getElementById("mission-count");

const planetsData = require('../../seeds/planetData.json');


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
                document.getElementById("countdownDisplay").innerHTML = count;
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

let counter = 0;

const planetSelector = document.getElementById("planetSelector");
var counterElement = document.getElementById("mission-success");

if(isHabitable){
    //missionSuccess will link to the counter on the dashboard 
    counter++;
    console.log(counter);
    counter = counterElement.innerHTML;
    
    console.log("Congrats! You have found a habitable planet!")
} else {
    console.log("Keep looking!")
}
console.log(habitability);
};
getData();

// random event function
function randomSpaceEvent() {
    const eventArray = [
        'ALERT: Geomagnetic Storm Nearby, Avoid the Radiation', 
        'ALERT: Sapce Debris Incoming!', 
        'ALERT: Approaching Black Hole Event Horizon! Take Evasive Action!', 
        'ALERT: Meteoroid Shower Closing In, Change Course!', 
        'ALERT: You are Currently in a Supernova Kill Zone!',
        'ALERT: Vacuum Leak Detected!', 
        'ALERT: Mankind was born on Earth, it was never meant to die there...', 
        'ALERT: SPACE WORMS', 
        'ALERT: SPACE PIRATES', 
        'ALERT: Unknown Impact! Investigate!', 
        'ALERT: Flat Earther Detected Nearby, Avoid At All Costs!', 
        'ALERT: Large Amounts of Radiation Detected', 
        'ALERT: Wormhole Nearby']

        // select random element
        var event = eventArray[Math.floor(Math.random()*eventArray.length)];

        return event;
}
randomSpaceEvent();


//listen for clicks on the dropdown
document.querySelector('.dropdown').addEventListener('click', function(event) {
    event.preventDefault();
    const selectedPlanetName = event.target.getAttribute('data-planet-name');
    const selectedPlanet = planetsData.find(planet => planet.name === selectedPlanetName);
    if (selectedPlanet) {
        document.body.style.backgroundImage = `url('${selectedPlanet.image}')`;
      }
    });

