function updateContactPageView(){
    document.getElementById('app').innerHTML = `
    <div>${model.data.contactPageBackground}</div>
    <ul>
        <li><a onclick="changeToContactPage()">Kontakt meg</a></li>
        <li><a onclick="changeToProjectsPage()">Mine prosjekter</a></li>
        <li><a href="">Hjem</a></li>
    </ul>
    
    <h1 class="contact1">Kontakt meg</h1>
    <h2 class="contact2">✆ +(47) 928 81 804</h2>
    <h2 class="contact2">✉ elisabeth.holmane@gmail.com</h2>
    `
}