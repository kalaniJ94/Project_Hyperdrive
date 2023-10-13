// allowing instant planet choice
async function planetChoiceHandler(event){
    var choices = event.target;
    const planetID = choices.getAttribute('id')
     console.log(planetID);
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
      document.location.replace(`/captainslog`);
     } else {
      alert('Failed to create mission');
     }
    }
   document.querySelector('.planet-choice').addEventListener('click', planetChoiceHandler);