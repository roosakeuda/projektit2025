function tarkistaLomake(event) {
  event.preventDefault(); // Estää lomakkeen lähetyksen

  const nimi = document.getElementById("nimi").value.trim();
  const salasana = document.getElementById("salasana").value.trim();
  const radioValinta = document.querySelector('input[name="kone"]:checked');
  const kommentti = document.getElementById("Kehitys").value.trim();

  let virheet = [];

  if (nimi === "") {
    virheet.push("Anna nimesi.");
  }

  if (salasana === "") {
    virheet.push("Anna salasana.");
  }

  if (!radioValinta) {
    virheet.push("Valitse arvio koneesta.");
  }

  if (kommentti.length < 10) {
    virheet.push("Kirjoita vähintään 10 merkkiä kommenttiin.");
  }

  if (virheet.length > 0) {
    alert("Korjaa seuraavat virheet:\n- " + virheet.join("\n- "));
  } else {
    alert("Lomake lähetetty onnistuneesti!");
    document.getElementById("lomake").submit(); // Lähetetään lomake
  }
}