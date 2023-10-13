// change background mission image on load

window.onload = (event) => {
    const container = document.getElementById("captains-log");
    const image = container.className;
    // access the style.css background image
    document.body.style.backgroundImage = `url('${image}')`;
}
