let lista = ["kivi", "sakset", "paperi"]
let kauttaja = 0
let tietokone = 0
let koneenValinta = ""
let indexi = 0
let vastaus = ""
let voittoHavio = 0


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
        vastaus // Näyttää html tiedostossa tulostekstin
    document.getElementById("voitot").innerHTML = 
        `Käyttäjä: ${kauttaja} / Tietokone: ${tietokone}` //
    document.getElementById("kayttaja").textContent = 
        kauttaja
    document.getElementById("tietokone").textContent = 
        tietokone

    lista.forEach(valinta =>{
        let nappi = document.getElementById(valinta)
        nappi.classList.remove("oikein", "vaarin")
        })
    let nappiPelaaja = document.getElementById(valinta)
    if (voittoHavio === 1){
        nappiPelaaja.classList.add("oikein")
    }else if (voittoHavio === -1){
        nappiPelaaja.classList.add("vaarin")
    }

}