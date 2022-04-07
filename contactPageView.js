function updateContactPageView(){
    document.getElementById('app').innerHTML = `
    <div>${model.data.contactPageBackground}</div>
    <ul>
        <li><a onclick="changeToContactPage()">Kontakt meg</a></li>
        <li><a onclick="changeToProjectsPage()">Mine prosjekter</a></li>
        <li><a onclick="changeToAboutPage()">Om meg</a></li>
        <li><a href="">Hjem</a></li>
        <div>Kontakt</div>
    </ul>`
}