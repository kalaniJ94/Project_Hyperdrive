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


document.querySelector('#log-form').addEventListener('submit', logGenerator);

