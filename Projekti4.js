var syotto = document.getElementById("syotto");
var enterButton = document.getElementById("enterButton");
var listamuutuja = document.getElementById("lista");

 //syötteen pituuden tarkistus
function syottopituus() {
    return syottovalue.length; //palauttaa syötetyn arvon pituuden
}

function listaPituus() {
    return listaPituus.length //palauttaa listalla olevian tehtävien määrän
}

//määrittää tehtävien määrän listalla
function tehtavienmaara() {
    return listamuutuja.getElementsByTagName("li").length
}

function vaihdaVari(event) {
    event.target.classList.toggle("valittu");
}

//poistaa
function deleteListItem(event) {
    event.target.parenElement.classList.add("piilotettu");
}

//tehtävän lisääminen listalle
function teeListaElementti() {
    var uusiTehtava = document.createElement("li"); // luo uuden li elementin
    uusiTehtava.appendChild(documentTextNode(syotto.value)); //lisää kirjoitetun tekstin
    uusiTehtava.addEventListener("click",vaihdaVari);

    var poistopainike = document.createElement("button");// lisää painikkeen X poistoa varten
    poistopainike.appendChild(document.createTextNode("X"));// lisää painikkeen X poistoa varten
    poistopainike.addEventListener("click", deleteListItem);
    uusiTehtava.appendChild(poistopainike);
    listamuutuja.appendChild(uusiTehtava);

    syotto.value = ""; 
}

//tarkastaa syöttö arvon pituuden
function lisaaListallePainalluksenjalkeen() {
    if (syottopituus() > 0) {//tarkastetaan onko edellä mainuttu
        teeListaElementti();//jos on, käynnistetään oletusfunctio
    } 
}

//Tämän jälkeen tarkastamme, onko mitään syötetty ja onko Enteriä painettu funktion avulla
function lisaaListaEnterinJälkeen() {
    if(syottopituus() >0 && event.wich ==13) { //event.wich ==13 (enterin painallus)
teeListaElementti(); //käynnistetään oletusfunctio
    } 
}

enterButton.addEventListener("click",lisaaListaEnterinJälkeen);
listamuutuja.addEventListener("keypress", lisaaListaEnterinJälkeen)
