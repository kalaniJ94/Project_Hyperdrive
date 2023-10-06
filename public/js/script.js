
function getData(){
const data = require('../../seeds/planetData.json');


var lightyears = (data[2].distance_light_year);
console.log(lightyears);

timerCountdown(lightyears);
};

function timerCountdown(lightyears) {
    let count = Math.round(lightyears);
    const timer = setInterval(function () {
        count--;
        
        console.log(count);
        var catchTimer = Math.round(lightyears) - 10;

        if (count === catchTimer) {
            console.log("Would you like to skip ahead?");
            console.log("Pop up button to skip ahead");
        } else if (count === 0) {
            clearInterval(timer);
            console.log("You have arrived!");
        }
    }, 1000);
};

getData();