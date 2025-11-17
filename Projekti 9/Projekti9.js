function arpa() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            console.log(data); // näyttää koko datan

            // otetaan ensimmäinen käyttäjä API:n vastauksesta
            const user = data.results[0];

            // rakennetaan HTML-sisältö
            const kayttajaHTML = `
                <h2>${user.name.first} ${user.name.last}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Maa:</strong> ${user.location.country}</p>
                <img src="${user.picture.medium}" alt="Käyttäjän kuva">
            `;

            // päivitetään sisältö sivulle
            document.getElementById('vastaus').innerHTML = kayttajaHTML;
        })
        .catch(error => {
            console.error("Virhe haussa:", error);
            document.getElementById('vastaus').textContent = "Virhe käyttäjän haussa.";
        });
}
