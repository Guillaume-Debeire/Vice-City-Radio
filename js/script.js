const playButton = document.getElementById('play-button')
const stopButton = document.getElementById('stop-button')
const tuning = new Audio('../assets/soundFX/tuning.mp3')
const fever105 = new Audio('../assets/music/fever-105.mp3')
const vrock = new Audio('../assets/music/v-rock.mp3')

const radioZone = document.getElementById('radio-zone')
const feverButton = document.getElementById('fever-105-button')
const rockButton = document.getElementById('v-rock-button')


playMusic = () => {
    vrock.volume = 0;
    vrock.play();
    fever105.play();
    
}

stopMusic = () => {
    vrock.pause();
    fever105.pause();
}

handlePlay = () => {
    playMusic()
}

handleStop = () => {
    stopMusic()
}

handleFever = () => {
    vrock.volume = 0
    tuning.play()
    setTimeout(function(){ 
        tuning.pause()
        tuning.load}, 1000)
    setTimeout(function(){ fever105.volume = 1 }, 1000)
}

handleRock = () => {
    fever105.volume = 0;
    tuning.play()
    setTimeout(function(){ 
        tuning.pause()
        tuning.load}, 1000)
    setTimeout(function(){ vrock.volume = 1 }, 1000)
    
}

playButton.addEventListener('click', handlePlay)

stopButton.addEventListener('click', handleStop)

feverButton.addEventListener('click', handleFever)

rockButton.addEventListener('click', handleRock)


fever105.load();
vrock.load();