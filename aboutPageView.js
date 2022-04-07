function updateAboutPageView(){
    document.getElementById('app').innerHTML = `
    <ul>
        <li><a onclick="changeToContactPage()">Kontakt meg</a></li>
        <li><a onclick="changeToProjectsPage()">Mine prosjekter</a></li>
        <li><a onclick="changeToAboutPage()">Om meg</a></li>
        <li><a href="">Hjem</a></li>
        <div>Om meg</div>
    </ul>`
}