let playButton = document.getElementById('play-button')

let emotionButton = document.getElementById('picture-emotion-98')
let espantosoButton = document.getElementById('picture-espantoso')
let feverButton = document.getElementById('picture-fever-105')
let flashButton = document.getElementById('picture-flash-fm')
let kchatButton = document.getElementById('picture-k-chat')
let vrockButton = document.getElementById('picture-v-rock')
let vcprButton = document.getElementById('picture-vcpr')
let waveButton = document.getElementById('picture-wave-103')
let wildstyleButton = document.getElementById('picture-wildstyle')

const handleEmotion = () => {
    playButton.style.left = "-5px"
}
const handleEspansoto = () => {
    playButton.style.left = "65px"
}
const handleFever = () => {
    playButton.style.left = "135px"
}
const handleFlash = () => {
    playButton.style.left = "215px"
}
const handleKchat = () => {
    playButton.style.left = "285px"
}
const handleVrock = () => {
    playButton.style.left = "365px"
}
const handleVcpr = () => {
    playButton.style.left = "435px"
}
const handleWave = () => {
    playButton.style.left = "515px"
}
const handleWildstyle = () => {
    playButton.style.left = "585px"
}



emotionButton.addEventListener('click', handleEmotion);
espantosoButton.addEventListener('click', handleEspansoto);
feverButton.addEventListener('click', handleFever);
flashButton.addEventListener('click', handleFlash);
kchatButton.addEventListener('click', handleKchat);
vrockButton.addEventListener('click', handleVrock);
vcprButton.addEventListener('click', handleVcpr);
waveButton.addEventListener('click', handleWave);
wildstyleButton.addEventListener('click', handleWildstyle);

