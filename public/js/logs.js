async function logGenerator(){
    const comment = document.querySelector("#notes").value;
    const mission_id = document.querySelector("#mission-id").value
    console.log("Working", comment, mission_id);
    const response = await fetch(`/api/logs`, 

      {
        method: 'POST',
        body: JSON.stringify({comment, mission_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        //document.location.replace(`/hyperspace`);
      } else {
        alert('Failed to create mission');
      }
}

async function hideLog(){
        const log = document.querySelector('#log-page');
        if (log.className === "hidden"){
        log.className = "visible";
        } else {
           log.className ="hidden"; 
        }
}

document.querySelector('#log-form').addEventListener('submit', logGenerator);

document.querySelector('#hide-log').addEventListener('click', hideLog);