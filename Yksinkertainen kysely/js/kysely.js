var yhteensa = 5;
var pisteet = 0; // alustamme alussa yhteispisteet 0:ksi
var huom = 0; //Alustetaanko huom muuttujaa????

//Hae käyttäjän syötteet
var k1 = document.forms ["Kyselylomake"]["k1"].value; //tallensimme muutujaan k1 lomakkeelta arvon...jne
var k2 = document.forms ["kyselylomake"]["k2"].value;
var k3 = document.forms ["kyselylomake"]["k3"].value;
var k4 = document.forms ["kyselylomake"]["k4"].value;
var k5 = document.forms ["kyselylomake"]["k5"].value;

//tarkastus
for (i = 1; i<= yhteensa; i++) {
    if(eval('k'+i) == null || eval('k'+i) == '') {	


alert ('Et vastannut kysymykseen numero:' +i);
    huom = 1;
    }
if(huom ==1) return false; //Lisätty vielä huom-muuttuja, jotta turhat ilmoitukset jäisi pois
}

// Aseta oikeat vastaukset
var vastaukset = ["b", "a", "d", "b", "d" ];
// Tarkasta oikeat vastukset
for (i = 1; i <= yhteensa; i++) {
    if (eval('k'+i)  == vastaukset [i-1]) {
        pisteet++;
    }
}

// Näytä vastaukset 
var tulokset = document.getElementById('tulokset');
    alert('Sait ' + pisteet + ' pistettä,kun maksimi pistemäärä oli ' +yhteensä);
        tulokset.innerHTML = '<h3> Sait <span>' + pisteet + '</span> pistettä, kun maksimi pistemäärä oli <span>' +yhteensa + '</span></h3>';