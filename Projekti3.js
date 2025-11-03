const rivi = document.getElementById('naytto');

function lisaa(value) {
    naytto.value += value;
}

function tyhjenna() {
    naytto.value = '';
}

function poista() {
    naytto.value = naytto.value.slice(0, -1);
}

function laske() {
    try {
      naytto.value = eval(naytto.value);
    } catch {
      naytto.value = 'Virhe';
    }
}