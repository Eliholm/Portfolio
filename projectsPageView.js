function updateProjectsPageView(){
    document.getElementById('app').innerHTML = `
    <ul>
        <li><a onclick="changeToContactPage()">Kontakt meg</a></li>
        <li><a onclick="changeToProjectsPage()">Mine prosjekter</a></li>
        <li><a href="">Hjem</a></li>
    </ul>
    <div class="projects-description">Her kan du se en oversikt over mindre og litt større prosjekter jeg har jobbet med i løpet av tiden ved GET Academy.</div>
    <div class="warning">*Obs, de er ikke tilpasset mobil- eller nettbrettskjerm.</div>
    <div class="container">
    <article class="article-grid">
    <div class="image">${model.data.unicornProject}</div>
    <div class="title">Plattformspill</div>
    <div class="description">Plattformspill laget i Modul 3.<br>
    Spillet er fortsatt under utvikling.<br>
    Koden kan du se <a href="">her.</a> <br><br>
    Laget i Unity (C#) <br>
    </div>
    <button><a href="https://elisabethholmane.no/unicorngame/index.html">»</a></button>
    </article>

    <article class="article-grid">
    <div class="image">${model.data.textProject}</div>
    <div class="title">Text Adventure-spill</div>
    <div class="description">Konsollapplikasjon laget i Modul 3.<br>
    Koden kan du se <a href="https://github.com/Eliholm/YouVsWild">her.</a> <br><br>
    Laget i C# <br>
    </div>
    <button><a href="https://github.com/Eliholm/YouVsWild">»</a></button>
    </article>

    <article class="article-grid"><div class="image">${model.data.starling}</div>
    <div class="title">Starling</div>
    <div class="description">Applikasjon laget for kunde med team i Modul 2.<br>
    Laget sammen med Lillie Rugtveit, Marcus Bengtsson og Marius Henriksen.<br>
    Koden kan du se <a href="https://github.com/Marcus-Bengtsson/GET-Modul-2-Oppgave">her.</a> <br><br>
    Laget i HTML, CSS og JavaScript <br>
    </div>
    <button><a href="https://marcus-bengtsson.github.io/GET-Modul-2-Oppgave/">»</a></button>
    </article>
   
    <article class="article-grid"><div class="image">${model.data.norgesquiz}</div>
    <div class="title">Norgesquiz</div>
    <div class="description">En quiz om Norge, laget i Modul 2.<br>
    Koden kan du se <a href="https://github.com/Eliholm/Norgesquiz/tree/main/Mellomuke">her.</a> <br><br>
    Laget i HTML, CSS og JavaScript <br>
    </div>
    <button><a href="https://eliholm.github.io/Norgesquiz/">»</a></button>
    </article>
    
    <article class="article-grid"><div class="image">${model.data.pokemon}</div>
    <div class="title">Pokémonspill</div>
    <div class="description">Et enkelt spill, videreutviklet fra stein, saks, papir.<br>
    Kort teamoppgave fra Modul 1.</br>
    Laget sammen med Geir Steffensen, Alexander Bøhler og Marcus Bengtsson.</br>
    Koden kan du se <a href="https://github.com/seedback/TeamOppgave4">her.</a> <br><br>
    Laget i HTML, CSS og JavaScript <br>
    </div>
    <button><a href="https://seedback.github.io/TeamOppgave4/">»</a></button>
    </article>

    <article class="article-grid"><div class="image">${model.data.clicker}</div>
    <div class="title">Klikkerspill</div>
    <div class="description">Første obligatoriske oppgave fra Modul 1.<br>
    Koden kan du se <a href="https://github.com/Eliholm/Obligatorisk-2">her.</a> <br><br>
    Laget i HTML, CSS og JavaScript <br>
    </div>
    <button><a href="https://eliholm.github.io/Obligatorisk-2/">»</a></button>
    </article>
    </div>
    `
}