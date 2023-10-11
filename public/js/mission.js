async function missionGenerator(){
    //gets a random number between 1-15 
    const planetID = await randomNumber();
    const status = 'Complete';

    const response = await fetch(`/api/missions/`, 
      {
        method: 'POST',
        body: JSON.stringify({planetID,status}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/hyperspace`);
      } else {
        alert('Failed to create mission');
      }
}

function randomNumber(){
    const num = Math.floor(Math.random()*(15-2))+1;
    return num;
}


document.querySelector('.link-mission').addEventListener('click', missionGenerator)