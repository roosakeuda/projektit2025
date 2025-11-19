let lista = ["kivi", "sakset", "paperi"]
let kauttaja = 0 // laskee käyttäjän voitot
let tietokone = 0 // laskee tietokoneen voitot
let koneenValinta = ""
let indexi = 0
let vastaus = ""
let voittoHavio = 0 // ilmoittaa onko viimeinen peli voitettu vai hävitty. 1 = voitto, -1 = häviö


function peli(tulos){ //kutsu tätä funktiota html elementtiä klikatessa, esim näin: onclick="peli('kivi')"
    indexi = Math.floor(Math.random()*3) 
    koneenValinta = lista[indexi] // arpoo numeron, ja hakee listalta tietokoneen valinnan

    if (koneenValinta == tulos){
        vastaus = "Tasapeli"
        voittoHavio = 0
    }else if (tulos == "kivi" && koneenValinta == "sakset"){
        vastaus = "Kivi voitti sakset. Sinä voitit!"
        kauttaja ++
        voittoHavio = 1
    }else if (tulos == "sakset" && koneenValinta == "paperi"){
        vastaus = "Sakset voitti paperin. Sinä voitit!"
        kauttaja ++
        voittoHavio = 1
    }else if (tulos == "paperi" && koneenValinta == "kivi"){
        vastaus = "Paperi voitti kiven. Sinä voitit!"
        kauttaja ++
        voittoHavio = 1
    }else if (koneenValinta == "kivi" && tulos == "sakset"){
        vastaus = "Kivi voitti sakset. Sinä hävisit!"
        tietokone ++
        voittoHavio = -1
    }else if (koneenValinta == "sakset" && tulos == "paperi"){
        vastaus = "Sakset voitti paperin. Sinä hävisit!"
        tietokone ++
        voittoHavio = -1
    }else if (koneenValinta == "paperi" && tulos == "kivi"){
        vastaus = "Paperi voitti kiven. Sinä hävisit!"
        tietokone ++
        voittoHavio = -1
    }


    document.getElementById("tulos").innerHTML = 
        vastaus // Näyttää html tiedostossa voitto/häviötekstin kohtaan: id="tulos"
    document.getElementById("voitot").innerHTML = 
        `Käyttäjä: ${kauttaja} / Tietokone: ${tietokone}` //näyttää tulospisteen tekstin id="voitot" kohtaan

    document.getElementById("kayttaja_pisteet").textContent = 
        kauttaja 
    document.getElementById("tietokoneen_pisteet").textContent = 
        tietokone

    // tuossa erikseen kaksi lausetta, jotka laittavat id="kayttaja" sekä id="tietokone" kohtaan erikseen joko käyttäjän pisteet, tai koneen pisteet. Voi käyttää jos haluaa, esim jos tulosboksin tekeminen on niillä helpompi

    lista.forEach(valinta =>{
        let nappi = document.getElementById(valinta)
        nappi.classList.remove("oikein", "vaarin", "tasapeli")
    }); // otetaan valinnalta pois "oikein", ja "vaarin" css luokat

    let nappiPelaaja = document.getElementById(tulos)
    if (voittoHavio === 1){
        nappiPelaaja.classList.add("oikein") // Jos käyttäjä voitti, lisätään css luokka "oikein"

        setTimeout(() => {
            nappiPelaaja.classList.remove("oikein")
        }, 1500) // ajastetaan se lähtemään 1,5s kuluttua
    }else if (voittoHavio === -1){
        nappiPelaaja.classList.add("vaarin") //Jos käyttäjä hävisi, lisätään css luokka "vaarin"
        setTimeout(() => {
            nappiPelaaja.classList.remove("vaarin")
        }, 1500)
    } else if(voittoHavio === 0){
        nappiPelaaja.classList.add("tasapeli")
        setTimeout(() =>{
            nappiPelaaja.classList.remove("tasapeli")
        },1500)
    }
}