
let oikea = Math.floor(Math.random()*10)+1
let arvaustenMaara = 0
let arvatutNumerot = []
let tulos = ""

function arvoNumero(){
    let arvaus = Number(document.getElementById("arvaus").value)

    if (arvaus > 10 || arvaus <= 0){
    tulos = "Arvaa luku välillä 1-10"
    }
    else if (arvaustenMaara >= 3){
        tulos = "Et voi enää arvata! Oikea numero oli " + oikea
    }
    else if (arvaus == oikea){
        arvatutNumerot.push(arvaus)
        tulos = "Oikein!"
        arvaustenMaara ++
    }
    else if (arvaus > oikea){
        tulos = "Arvauksesi on liian suuri"
        arvaustenMaara ++
        arvatutNumerot.push(arvaus)
        if (arvaustenMaara >= 3){
            tulos = "Et voi enää arvata! Oikea numero oli " + oikea
        } 

    }else if (arvaus < oikea){
        tulos = "Arvauksesi on liian pieni"
        arvaustenMaara ++
        arvatutNumerot.push(arvaus)
        if (arvaustenMaara >= 3){
            tulos = "Et voi enää arvata! Oikea numero oli " + oikea
        }
    }
    document.getElementById("lukumaara").innerHTML =
        `Arvausten määrä:  ${arvaustenMaara}`
    document.getElementById("arvatut").innerHTML =
        `Arvatut numerot: ${arvatutNumerot}`
    document.getElementById("tulos").innerHTML =
        tulos
}

