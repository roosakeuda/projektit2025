
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


function dragEnter(e){
    e.preventDefault()
    e.target.classList.add('drag-over')
}
function dragOver(e){
    e.preventDefault()
    e.target.classList.add('drag-over')
}

function dragLeave(e){
    e.target.classList.remove('drag-over')
}
function drop(e){
    e.preventDefault()
    e.target.classList.remove('drag-over')

    const id = e.dataTransfer.getData('text/plain')
    const draggable = document.getElementById(id)

    const targetBox = e.target.classList.contains('laatikko')  //pidetään huoli siitä, että tehtävät tippuu laatikkoon eikä laatikon sisällä muuhun elementtiin
        ? e.target 
        : e.target.closest('.laatikko');

    if (targetBox){
        targetBox.appendChild(draggable)
    }

    draggable.classList.remove('dragging')
} 


// tehtävien lisääminen
const lisaaTehtava = document.getElementById('lisaaTehtava')
const tehtavaTeksti = document.getElementById('tehtavaTeksti')
let counter = 1 // jokaiselle oma id numero

lisaaTehtava.addEventListener('click', () => {
    const teksti = tehtavaTeksti.value.trim();
    if (teksti === '') return

    const uusiItem = document.createElement('div')
    uusiItem.classList.add('item')
    uusiItem.setAttribute('draggable', true)
    uusiItem.id = `item-${counter++}`
    uusiItem.textContent = teksti

    uusiItem.addEventListener('dragstart', dragStart)

    document.getElementById('sprint').appendChild(uusiItem)
    tehtavaTeksti.value = '' // tehtäväkenttäarvon tyhjennys
})

