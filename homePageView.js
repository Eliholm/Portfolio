updateView();

function updateView(){
    document.getElementById('app').innerHTML = `
    <div>${model.data.homePageBackground}</div>
    <ul>
        <li><a href="">Kontakt meg</a></li>
        <li><a href="">Mine prosjekter</a></li>
        <li><a href="">Om meg</a></li>
        <li><a href="">Hjem</a></li>
    </ul>
    <h1>Hei! <span class="wave"><img src="images/hånd3.jpg" alt="bilde" width="150" height="150"></span></h1>
    <h2>Jeg heter Elisabeth Holmane,</h2>
    <h3>og jeg er student hos GET Academy.</h3>
    `
}

