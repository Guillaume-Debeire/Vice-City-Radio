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
    {
        name: "vcpr",
        url: "vcpr",
    },
    {
        name: "kchat",
        url: "k-chat",
    },
]

radios.forEach(radio => {   
    let radioButton = document.createElement('button');
    radioButton.classList.add('radio-button')
    radioButton.id = radio.url + '-button'
    radioButton.innerHTML = '<img class="radio-picture" src="assets/radio/' + radio.url + '.png" alt="' + radio.name + '">'
    radioZone.appendChild(radioButton);
});

function muteAll() {
    fever105.volume = 0;
    vrock.volume = 0;
    wildstyle.volume = 0;
    flashfm.volume = 0;
    espantoso.volume = 0;
    emotion98.volume = 0;
    wave103.volume = 0;
    vcpr.volume = 0;
    kchat.volume= 0;
}

function tuningSound() {
    tuning.volume = 1;
    setTimeout(function(){ 
        tuning.volume = 0;
        }, 1000)
}

handleFever = () => {
    let button =document.getElementById('fever-105-button');
    button.classList += " active";
    console.log(button.classList)
    muteAll();
    tuningSound();
    setTimeout(function(){ fever105.volume = 1 }, 1000)
}

handleRock = () => {
    muteAll();
    tuningSound();
    setTimeout(function(){ vrock.volume = 1 }, 1000)
    
}
handleWildstyle = () => {
    muteAll();
    tuningSound();
    setTimeout(function(){ wildstyle.volume = 1 }, 1000)
    
}
handleFlash = () => {
    muteAll();
    tuningSound();
    setTimeout(function(){ flashfm.volume = 1 }, 1000)
    
}
handleEspantoso = () => {
    muteAll();
    tuningSound();
    setTimeout(function(){ espantoso.volume = 1 }, 1000)
    
}
handleEmotion = () => {
    muteAll();
    tuningSound();
    setTimeout(function(){ emotion98.volume = 1 }, 1000)
    
}
handleWave = () => {
    muteAll();
    tuningSound();
    setTimeout(function(){ wave103.volume = 1 }, 1000)
    
}
handleVcpr = () => {
    muteAll();
    tuningSound();
    setTimeout(function(){ vcpr.volume = 1 }, 1000)
    
}
handleKchat = () => {
    muteAll();
    tuningSound();
    setTimeout(function(){ kchat.volume = 1 }, 1000)
    
}


const feverButton = document.getElementById('fever-105-button')
const rockButton = document.getElementById('v-rock-button')
const wildstyleButton = document.getElementById('wildstyle-button')
const flashfmButton = document.getElementById('flash-fm-button')
const espantosoButton = document.getElementById('espantoso-button')
const emotionButton = document.getElementById('emotion-98-button')
const waveButton = document.getElementById('wave-103-button')
const vcprButton = document.getElementById('vcpr-button')
const kchatButton = document.getElementById('k-chat-button')


feverButton.addEventListener('click', handleFever)
rockButton.addEventListener('click', handleRock)
wildstyleButton.addEventListener('click', handleWildstyle)
flashfmButton.addEventListener('click', handleFlash)
espantosoButton.addEventListener('click', handleEspantoso)
emotionButton.addEventListener('click', handleEmotion)
waveButton.addEventListener('click', handleWave)
vcprButton .addEventListener('click', handleVcpr)
kchatButton.addEventListener('click', handleKchat)