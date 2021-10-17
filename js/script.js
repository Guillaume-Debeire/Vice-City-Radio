const startButton = document.getElementById('start-button')
const stopButton = document.getElementById('stop-button')
const radioZone = document.getElementById('radio-zone')

const message = document.getElementById('message-content')

const tuning = new Audio('../assets/soundFX/tuning.mp3')
const fever105 = new Audio('../assets/music/fever-105.mp3')
const vrock = new Audio('../assets/music/v-rock.mp3')
const wildstyle = new Audio('../assets/music/wildstyle.mp3')
const flashfm = new Audio('../assets/music/flash-fm.mp3')
const espantoso = new Audio('../assets/music/espantoso.mp3')
const emotion98 = new Audio('../assets/music/emotion-98.mp3')
const wave103 = new Audio('../assets/music/wave-103.mp3')
const vcpr = new Audio('../assets/music/vcpr.mp3')
const kchat = new Audio('../assets/music/k-chat.mp3')
fever105.load();
vrock.load();
wildstyle.load();
flashfm.load();
espantoso.load();
emotion98.load();
wave103.load();
vcpr.load();
kchat.load();

playMusic = () => {
    vrock.volume = 0;
    wildstyle.volume = 0;
    flashfm.volume = 0;
    espantoso.volume = 0;
    emotion98.volume = 0;
    wave103.volume = 0;
    vcpr.volume = 0;
    kchat.volume = 0;
    tuning.volume = 0;
    fever105.play();
    vrock.play();
    wildstyle.play();
    flashfm.play();
    espantoso.play();
    emotion98.play();
    wave103.play();
    vcpr.play();
    kchat.play();
    tuning.play();
    message.innerHTML = 'FEVER 105'
}

stopMusic = () => {
    vrock.pause();
    fever105.pause();
    wildstyle.pause();
    flashfm.pause();
    espantoso.pause();
    emotion98.pause();
    wave103.pause();
    vcpr.pause();
    kchat.pause();
    message.innerHTML = 'STOP'
}

handlePlay = () => {
    playMusic()
}

handleStop = () => {
    stopMusic()
}

startButton.addEventListener('click', handlePlay)

stopButton.addEventListener('click', handleStop)