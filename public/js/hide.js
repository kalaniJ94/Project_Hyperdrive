async function hideLog(){
    const log = document.querySelector('#log-page');
    if (log.className === "hidden"){
    log.className = "visible";
    } else {
       log.className ="hidden"; 
    }
}


document.querySelector('#hide-log').addEventListener('click', hideLog);
