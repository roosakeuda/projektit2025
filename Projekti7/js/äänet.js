let currentAudio = null

function soitaAani(elain){
    if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0;
    }


    currentAudio = new Audio(`äänet/${elain}.mp3.mp3`)
    currentAudio.play()
}  