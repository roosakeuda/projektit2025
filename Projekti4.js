   // Odotetaan, että DOM on valmis
   document.addEventListener('DOMContentLoaded', function () {
    var syotto = document.getElementById("syotto");
    var enterButton = document.getElementById("enterButton");
    var listamuutuja = document.getElementById("lista");

    // apufunktiot
    function syottopituus() {
      return syotto.value.trim().length;
    }

    // Luo ja lisää uusi <li>
    function teeListaElementti() {
      var teksti = syotto.value.trim();
      if (teksti === "") return; // ei lisätä tyhjää
      var uusiTehtava = document.createElement("li");
      uusiTehtava.textContent = teksti;

      // lisää klikkitapahtuma li:lle (vaihtaa luokan)
      uusiTehtava.addEventListener("click", function (ev) {
        // jos klikattiin poistopainiketta, älä vaihda luokkaa (event bubbling)
        if (ev.target && ev.target.classList.contains('poista')) return;
        this.classList.toggle("valittu");
      });

      // luodaan poistopainike
      var poistopainike = document.createElement("button");
      poistopainike.textContent = "X";
      poistopainike.className = "poista";
      poistopainike.setAttribute("aria-label", "Poista tehtävä");
      poistopainike.addEventListener("click", function (ev) {
        ev.stopPropagation(); // estetään li:n click-tapahtuma
        var li = this.parentElement;
        if (li) li.remove();
      });

      uusiTehtava.appendChild(poistopainike);
      listamuutuja.appendChild(uusiTehtava);

      // tyhjennetään syöte ja palautetaan fokus
      syotto.value = "";
      syotto.focus();
    }

    // Napin klikkaus lisää tehtävän (ei tarkista Enteriä)
    enterButton.addEventListener("click", function () {
      if (syottopituus() > 0) {
        teeListaElementti();
      }
    });

    // Enter-näppäin syötteessä lisää tehtävän
    syotto.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && syottopituus() > 0) {
        event.preventDefault(); // estetään mahdollinen lomakkeen lähetys
        teeListaElementti();
      }
    });

  });

// var syotto = document.getElementById("syotto");
// var enterButton = document.getElementById("enterButton");
// enterButton.addEventListener("click",lisaaListaEnterinJalkeen);
// var listamuutuja = document.getElementById("lista");

//  //syötteen pituuden tarkistus
// function syottopituus() {
//     return syotto.value.length; //palauttaa syötetyn arvon pituuden
// }

// function listaPituus() {
//     return listamuutuja.getElementsByTagName("li").length //palauttaa listalla olevian tehtävien määrän
// }

// //määrittää tehtävien määrän listalla
// function tehtavienmaara() {
//     return listamuutuja.getElementsByTagName("li").length
// }

// function vaihdaVari(event) {
//     event.target.classList.toggle("valittu");
// }

// //poistaa
// function deleteListItem(event) {
//     event.target.parentElement.classList.add("piilotettu");
// }

// //tehtävän lisääminen listalle
// function teeListaElementti() {
//     alert("Kukkuu");
//     var uusiTehtava = document.createElement("li"); // luo uuden li elementin
//     uusiTehtava.appendChild(document.createTextNode(syotto.value)); //lisää kirjoitetun tekstin
//     // uusiTehtava.addEventListener("click",vaihdaVari);
//     ul.appendChild(uusiTehtava);
//     input.value = "";
//     // var poistopainike = document.createElement("button");// lisää painikkeen X poistoa varten
//     // poistopainike.appendChild(document.createTextNode("X"));// lisää painikkeen X poistoa varten
//     // poistopainike.addEventListener("click", deleteListItem);
//     // uusiTehtava.appendChild(poistopainike);
//     listamuutuja.appendChild(uusiTehtava);
    
//     syotto.value = ""; 
// }

// //tarkastaa syöttö arvon pituuden
// function lisaaListallePainallukseJalkeen() {
//     if (syottopituus() > 0) {//tarkastetaan onko edellä mainuttu
//         teeListaElementti();//jos on, käynnistetään oletusfunctio
//     } 
// }

// //Tämän jälkeen tarkastamme, onko mitään syötetty ja onko Enteriä painettu funktion avulla
// function lisaaListaEnterinJalkeen() {
//     if(syottopituus() >0 && event.which === 13) { 
//         teeListaElementti(); //käynnistetään oletusfunctio
        
//     } 
// }

// syotto.addEventListener("keypress", lisaaListaEnterinJälkeen);

// function lista() {
//     li.classList.toggle("");
//     li.addEventListener("click", vaihdaVari);
//     var muutujaX = document.createElement("button");
//     muutujaX.appendChild(document.createTextNode("X"));
//     li.appendChild(muutujaX);
//     muutujaX.addEventListener("click", deleteListItem);
// }

// function deleteListItem(event) {
//     var poistettava = event.target.parentElement; // haetaan painikkeen vanhempi <li>
//     poistettava.remove(); // poistetaan se kokonaan listasta
// }



