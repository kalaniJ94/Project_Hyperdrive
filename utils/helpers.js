
// helper functions
module.exports = {
    // creates a random space event
    randomSpaceEvent: () => {
        const eventArray = [
            'ALERT: Geomagnetic Storm Nearby, Avoid the Radiation', 
            'ALERT: Sapce Debris Incoming!', 
            'ALERT: Approaching Black Hole Event Horizon! Take Evasive Action!', 
            'ALERT: Meteoroid Shower Closing In, Change Course!', 
            'ALERT: You are Currently in a Supernova Kill Zone!',
            'ALERT: Vacuum Leak Detected!', 
            'ALERT: "Mankind was born on Earth, it was never meant to die there..."', 
            'ALERT: SPACE WORMS', 
            'ALERT: SPACE PIRATES', 
            'ALERT: Unknown Impact! Investigate!', 
            'ALERT: Flat Earther Detected Nearby, Avoid At All Costs!', 
            'ALERT: Large Amounts of Radiation Detected', 
            'ALERT: Wormhole Nearby']
    
            // select random element
            var event = eventArray[Math.floor(Math.random()*eventArray.length)];
    
            return event;
    },
    setAudio: () => {
        const media_src = 'https://open.spotify.com/track/6dkJvNZ7DJWzTFXv3KHmoT?si=abb79546f6024d63'
        console.log('media src: ' + media_src);

        return "hello";
    }
}

