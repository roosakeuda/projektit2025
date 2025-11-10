function store() {
    var etunimi = document.getElementById('etunimi').value;
    var sukunimi = document.getElementById('sukunimi').value;
    var lahiosoite = document.getElementById('lahiosoite').value;
    var postinumero = document.getElementById('postinumero').value;
    var postitoimipaikka = document.getElementById('postitoimipaikka').value;
    var puhelinnumero = document.getElementById('puhelinnumero').value;
    var sahkoposti = document.getElementById('sahkoposti').value;

    var key = etunimi + "_" + sukunimi;

    const yhteystiedot = {
        etunimi: etunimi,
        sukunimi: sukunimi,
        lahiosoite: lahiosoite,
        postinumero: postinumero,
        postitoimipaikka: postitoimipaikka,
        puhelinnumero: puhelinnumero,
        sahkoposti: sahkoposti,
    };

    window.localStorage.setItem(key, JSON.stringify(yhteystiedot));
    console.log("Yhteystiedot tallennettu avaimella: " + key);
}

function naytaTallennetutTiedot() {
    const tulos = document.getElementById('tulokset');
    tulos.innerHTML = "";
    
    for (let i = 0; i < localStorage.length; i++) {
        const avain = localStorage.key(i);
        const tieto = JSON.parse(localStorage.getItem(avain));
        const rivi = document.createElement('p');
        rivi.textContent = `${tieto.etunimi} ${tieto.sukunimi}, ${tieto.lahiosoite}, ${tieto.postinumero} ${tieto.postitoimipaikka}, Puh: ${tieto.puhelinnumero}, Sähköposti: ${tieto.sahkoposti}`;
        tulos.appendChild(rivi);
    }
    }


function removeItem() {
    if (confirm("Haluatko varmasti poistaa kaikki tallennetut tiedot?")) {
        localStorage.clear();
        console.log("Kaikki tiedot poistettu");
        naytaTallennetutTiedot();
    }
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lomake").addEventListener("submit", function (e) {
        e.preventDefault();
        store();
    });

    document.getElementById("removeItem").addEventListener("click", removeItem);
    naytaTallennetutTiedot();
});


