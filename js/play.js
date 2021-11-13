const scrollBar = document.getElementById('scroll-bar')
const playButton = document.getElementById('play-button')

const radios = [
    {
        name: "fever105",
        url: "fever-105",
    },
    {
        name: "vrock",
        url: "v-rock",
    },
    {
        name: "wildstyle",
        url: "wildstyle",
    },
    {
        name: "flashfm",
        url: "flash-fm",
    },
    {
        name: "espantoso",
        url: "espantoso",
    },
    {
        name: "emotion98",
        url: "emotion-98",
    },
    {
        name: "wave103",
        url: "wave-103",
    },
]

radios.forEach(radio => {   
    let radioButton = document.createElement('button');
    radioButton.classList.add('radio-button')
    radioButton.id = 'picture-' + radio.url
    radioButton.innerHTML = 
    '<div class="flash"></div><img class="radio-picture" src="assets/radio/' + radio.url + '.png" alt="' + radio.name + '">'
    scrollBar.appendChild(radioButton);
});

function muteAll() {
    fever105.muted = true;
    vrock.muted = true;
    wildstyle.muted = true;
    flashfm.muted = true;
    espantoso.muted = true;
    emotion98.muted = true;
    wave103.muted = true;
}



function tuningSound() {
    tuning.muted = false;
    setTimeout(function(){ 
        tuning.muted = true;
        }, 1000)
}

handleFever = () => {
    // playButton.style.left = "135px"
    muteAll();
    tuningSound();
    message.innerHTML = 'FEVER 105'
    setTimeout(function(){ fever105.muted = false }, 1000)
}

handleRock = () => {
    // playButton.style.left = "360px"
    muteAll();
    tuningSound();
    message.innerHTML = 'V-ROCK'
    setTimeout(function(){ vrock.muted = false }, 1000)
    
}
handleWildstyle = () => {
    // playButton.style.left = "585px"
    muteAll();
    tuningSound();
    message.innerHTML = 'WILDSTYLE'
    setTimeout(function(){ wildstyle.muted = false }, 1000)
    
}
handleFlash = () => {
    // playButton.style.left = "210px"
    muteAll();
    tuningSound();
    message.innerHTML = 'FLASH FM'
    setTimeout(function(){ flashfm.muted = false }, 1000)
    
}
handleEspantoso = () => {
    // playButton.style.left = "61px"
    muteAll();
    tuningSound();
    message.innerHTML = 'ESPANTOSO'
    setTimeout(function(){ espantoso.muted = false }, 1000)
    
}
handleEmotion = () => {
    // playButton.style.left = "-5px"
    muteAll();
    tuningSound();
    message.innerHTML = 'EMOTION 98'
    setTimeout(function(){ emotion98.muted = false }, 1000)
    
}
handleWave = () => {
    // playButton.style.left = "510px"
    muteAll();
    tuningSound();
    message.innerHTML = 'WAVE 103'
    setTimeout(function(){ wave103.muted = false }, 1000)
    
}



const feverButton = document.getElementById('picture-fever-105')
const rockButton = document.getElementById('picture-v-rock')
const wildstyleButton = document.getElementById('picture-wildstyle')
const flashfmButton = document.getElementById('picture-flash-fm')
const espantosoButton = document.getElementById('picture-espantoso')
const emotionButton = document.getElementById('picture-emotion-98')
const waveButton = document.getElementById('picture-wave-103')


feverButton.addEventListener('click', handleFever)
rockButton.addEventListener('click', handleRock)
wildstyleButton.addEventListener('click', handleWildstyle)
flashfmButton.addEventListener('click', handleFlash)
espantosoButton.addEventListener('click', handleEspantoso)
emotionButton.addEventListener('click', handleEmotion)
waveButton.addEventListener('click', handleWave)