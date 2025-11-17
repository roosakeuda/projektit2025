
function dragStart(e){
    const id = e.target.id;
    e.dataTransfer.setData('text/plain', id)
    e.target.classList.add('dragging')

}

//luodaan laatikoille drop ominaisuudet
const laatikot = document.querySelectorAll('.laatikko')
laatikot.forEach(laatikko => {
    laatikko.addEventListener('dragenter', dragEnter)
    laatikko.addEventListener('dragover', dragOver)
    laatikko.addEventListener('dragleave', dragLeave)
    laatikko.addEventListener('drop', drop)
});

// nämä funktiot toteutuu, kun elementti tuodaan laatikon päälle
function dragEnter(e){
    e.preventDefault() 
    e.target.classList.add('drag-over') // lisätään css luokka
}
function dragOver(e){
    e.preventDefault()
    e.target.classList.add('drag-over') // lisätään css luokka
}

function dragLeave(e){
    e.target.classList.remove('drag-over') // kun elementti lähtee, otetaan css luokka pois
}
function drop(e){
    e.preventDefault()
    e.target.classList.remove('drag-over') // kun elementti laitetaan laatikkoon, css luokka lähtee

    const id = e.dataTransfer.getData('text/plain')
    const draggable = document.getElementById(id)

    const targetBox = e.target.classList.contains('laatikko')  //pidetään huoli siitä, että tehtävät tippuu laatikkoon eikä laatikon sisällä muuhun elementtiin
        ? e.target 
        : e.target.closest('.laatikko');

    if (targetBox){
        targetBox.appendChild(draggable) // siirretään elementti laatikkoon
    }

    draggable.classList.remove('dragging') // css luokka pois
} 


// tehtävien lisääminen
const lisaaTehtava = document.getElementById('lisaaTehtava')
const tehtavaTeksti = document.getElementById('tehtavaTeksti')
let counter = 1 // jokaiselle tehtävälle oma id numero


//kun nappia painetaan
lisaaTehtava.addEventListener('click', () => {
    const teksti = tehtavaTeksti.value.trim();
    if (teksti === '') return

    // tehtävälle tehdään uusi div elementti
    const uusiItem = document.createElement('div')
    uusiItem.classList.add('item')
    uusiItem.setAttribute('draggable', true) 
    uusiItem.id = `item-${counter++}` // annetaan oma id arvo
    uusiItem.textContent = teksti

    uusiItem.addEventListener('dragstart', dragStart) // uuteen tehtävään lisätään dragStart funktio

    document.getElementById('sprint').appendChild(uusiItem) // uusi elementti tulee "sprint" laatikkoon

    tehtavaTeksti.value = '' // tehtäväkenttäarvon tyhjennys
})

