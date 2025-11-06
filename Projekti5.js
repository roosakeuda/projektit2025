let neljaNelja = ["♗", "♘", "♛", "♖", "♔", "♙", "♤", "🍎", "♗", "♘", "♛", "♖", "♔", "♙", "♤", "🍎"]
let kuusiNelja = ["♗", "♘", "♛", "♖", "♔", "♙", "♤", "🍎", "♡", "♢", "♩", "🍌", "♗", "♘", "♛", "♖", "♔", "♙", "♤", "🍎", "♡", "♢", "♩", "🍌"]
let kuusiKuusi = ["♗", "♘", "♛", "♖", "♔", "♙", "♤", "🍎", "♡", "♢", "♩", "🍌", "♫", "☀","☁", "☃", "♗", "♘", "♛", "♖", "♔", "♙", "♤", "🍎", "♡", "♢", "♩", "🍌", "♫", "☀","☁", "☃", "🍇","🍓","🍇","🍓"]
let kortti = "�"
let valitutKortit  = []
let klikkaukset = 1
let aika
let ajastinID
let oikeinKaytetyt = 0

function aloitaPeli(){
    klikkaukset = 1
    document.getElementById("lopputulos").innerHTML = ""

    let valinta = document.getElementById("pelikoko").value
    let valittuLista // Valitaan pelikoko
    if (valinta == "4x4"){
        valittuLista = neljaNelja
        document.getElementById("pelialue").style.gridTemplateColumns = "repeat(4, 60px)";
    }else if (valinta == "4x6"){
        valittuLista = kuusiNelja;
        document.getElementById("pelialue").style.gridTemplateColumns = "repeat(6, 60px)";
    }else if (valinta == "6x6"){
        valittuLista = kuusiKuusi
        document.getElementById("pelialue").style.gridTemplateColumns = "repeat(6, 60px)";
    }

    valittuLista = sekoita(valittuLista)

    luoKortit(valittuLista)
}
function sekoita(lista){

    for (let i = lista.length -1; i>0; i--){
        const j = Math.floor(Math.random()*(i +1));
        [lista[i], lista[j]] = [lista[j], lista[i]]
    } // sekoitetaan muistipeli
    return lista
}



function luoKortit(lista){
    aloitaAjastin() //Aloitetaan ajastin kun peli alkaa
    let i = 0
    let pelialue = document.getElementById("pelialue") 
        pelialue.innerHTML = ""
    valitutKortit = []

    while (i < lista.length){ // Luodaan korttialue
        let uusiDiv = document.createElement("div")
        uusiDiv.appendChild(document.createTextNode(kortti))
        uusiDiv.dataset.symbol = lista[i] 

        uusiDiv.addEventListener("click", function(){ //Funktio joka aktivoituu kun korttia klikataan
            if (this.textContent !== kortti) return; //estetään jo avatun kortin kääntö
            document.getElementById("tulos").innerHTML =
                `Klikkauksia käytetty ${klikkaukset}`
            klikkaukset ++ //klikkauslaskuri

            this.textContent = this.dataset.symbol
            valitutKortit.push(this)

            if (valitutKortit.length == 2){ // tarkistetaan onko kaksi käännettyä korttia samaa symbolia
                if (valitutKortit[0].dataset.symbol == valitutKortit[1].dataset.symbol){
                    valitutKortit = []
                    oikeinKaytetyt += 2
                    if (oikeinKaytetyt == lista.length){ // Tarkistetaan onko kaikki kortit käännetty, ja lopetetaan peli
                        peliLoppu()
                    }
                }else{
                    setTimeout(() => {
                        valitutKortit[0].textContent = kortti
                        valitutKortit[1].textContent = kortti
                        valitutKortit = []
                    }, 1000); // Luodaan viive, että kortit kääntyvät jos ne ovat eri korttia.
                }
            }
        })
        pelialue.appendChild(uusiDiv)
        i ++
    }

}

function aloitaAjastin(){
    aika = 0
    document.getElementById("aika").textContent = `Aika ${aika}s`
    ajastinID = setInterval(() => {
        aika ++
        document.getElementById("aika").textContent =`Aika ${aika}s`;
    }, 1000); // Luodaan ajastin pelin ajaksi
}

function peliLoppu(){
    clearInterval(ajastinID); // Lopetetaan ajastin ja syötetään lopputeksti
    document.getElementById("lopputulos").innerHTML = `Onneksi olkoon! Käytit ${klikkaukset} klikkausta ja aikaa ${aika} sekuntia.`
    klikkaukset = 1
    document.getElementById("tulos").innerHTML = ""
}



