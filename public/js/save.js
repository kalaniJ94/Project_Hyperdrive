// captains log save button route
async function handleNoteSave(){
    const status = 'Complete';

    // fetch the api
    const response = await fetch(`/api/captainslog/`, 
      {
        method: 'POST',
        body: JSON.stringify({missionID,comment}),
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

document.querySelector('#note-save').addEventListener('click', handleNoteSave)