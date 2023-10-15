// getMSPFAletiables

const getMSPFAletiablesAudio = (identifier) => {
  // Moved here to avoid compatibility issues
  const letRegexp = /"(.*?)"|\S+/g;
  const removeQuotesRegex = /[^\"].*[^\"]|[^\"]/g;

  const lineRegexp = new RegExp(`@mspfa ${identifier}(.*?);`, 'g');
  const foundLines = [...MSPFA.story.y.matchAll(lineRegexp)];

  const output = foundLines.map((block) => {
    let lets = [...block[0].slice(0, -1).matchAll(letRegexp)].splice(2);
    return lets.map((arr) => arr[0].match(removeQuotesRegex)[0]);
  })

  return output;
};

// Normal code

let soundhidden = false
let audiolist = getMSPFAletiablesAudio("audio");

let audio1
let audio2
let currentAudioElement
let wrapdiv
let songinfo

let doFadeOut = false
let doFadeOutTime

// Redo styling lmao
let style = document.createElement("style")
style.innerHTML = "#soundbar { position: fixed; left: 1em; min-height: 10px; min-width: 10px; background: black none repeat scroll 0% 0%; padding: 1em; border-color: yellow yellow currentcolor; border-style: solid solid none; border-width: 5px 5px medium; border-image: none 100% / 1 / 0 stretch; outline: orange solid 5px; transition: bottom 0.5s ease 0s; font-family: \"Press Start 2P\"; color: white; bottom: 0px; } #soundbar button { position: absolute; height: 40px; left: -5px; background: black none repeat scroll 0% 0%; color: white; border: 5px solid yellow; outline: orange solid 5px; bottom: calc(118px); font-family: \"Press Start 2P\"; padding: 0.4em; } #songinfo { margin-bottom: 5px; }"
document.head.prepend(style)

let createSoundBar = () => {
  wrapdiv = document.createElement('div')

  // Add elements
  const sounddiv = document.createElement("div")
  sounddiv.style = "bottom: 0;"
  sounddiv.id = "soundbar"

  const button = document.createElement("button")
  button.innerText = "Music Controls ▼"
  button.onclick = () => {
    sounddiv.style = !soundhidden ? "bottom: calc(-5px - " + sounddiv.offsetHeight + "px);" : "bottom: 0;"
    soundhidden ^= true
    button.innerText = soundhidden ? "Music Controls ▲" : "Music Controls ▼"
  }
  sounddiv.appendChild(button)

  songinfo = document.createElement("div")
  songinfo.id = "songinfo"
  songinfo.innerText = "Now Playing: \nGetting title..."
  songinfo.style.marginBottom = "5px"
  sounddiv.appendChild(songinfo)

  audio1 = document.createElement("audio")
  audio1.controls = true
  audio1.autoplay = true
  audio1.loop = true
  audio1.src = "https://file.garden/X1htvgJ0DEp_tp-Z/Undertale%20sfx/HEY%20EVERY%20%20%20%20!%20-%20Deltarune.mp3"
  sounddiv.appendChild(audio1)

  audio2 = document.createElement("audio")
  audio2.controls = false
  audio2.autoplay = true
  audio2.loop = true
  audio2.volume = 0
  audio2.src = "https://file.garden/X1htvgJ0DEp_tp-Z/Undertale%20sfx/HEY%20EVERY%20%20%20%20!%20-%20Deltarune.mp3"
  sounddiv.appendChild(audio2)

  currentAudioElement = audio1

  wrapdiv.appendChild(document.createElement("br"))
  wrapdiv.appendChild(sounddiv)

  document.body.appendChild(wrapdiv)

  //Set button bottom with bar height
  button.style = " bottom: calc(" + sounddiv.offsetHeight + "px + 15px);"
}

let updateaudio = () => {
  let isaudio = false
  audiolist.forEach(a => {
    // min and max pages
    let min = a[0] ? parseInt(a[0]) : 0
    let max = a[1] ? parseInt(a[1]) : min

    // if a[2] is a link, then the source must be a[2] and there is no volume argument, else volume is a[2]
    let src = a[2].includes("https://") ? a[2] : a[3]
    let vol = src == a[3] ? Math.max(0, Math.min(1, parseFloat(a[2]))) : 1

    let fade = src == a[3] ? a[4] : a[3]
    let fadeTime = src == a[3] ? parseFloat(a[5]) : parseFloat(a[4])

    fade = fade ? fade : ""
    fadeTime = fadeTime ? fadeTime : 2

    if (MSPFA.p >= min && MSPFA.p <= max) {
      if (currentAudioElement.src !== src) {
        // if replacing song
        if (doFadeOut) fadeAudioOut(currentAudioElement.volume, currentAudioElement.currentTime, doFadeOutTime)

        // set new song
        currentAudioElement.src = src
        currentAudioElement.currentTime = 0

        if (fade.includes("in")) {
          currentAudioElement.volume = 0
          fadeAudioIn(vol, fadeTime)
        } else {
          currentAudioElement.volume = vol
        }

        wrapdiv.style = "opacity: 1; transition: opacity 0.5s"

        // fade out prep
        doFadeOut = fade.includes("out")
        doFadeOutTime = fadeTime
      }

      songinfo.innerText = "Now Playing: \n" + getTitle(src)
      isaudio = true

    }
  })

  if (!isaudio) {
    if (doFadeOut) {
      fadeAudioOut(currentAudioElement.volume, currentAudioElement.currentTime, doFadeOutTime)
      doFadeOut = false
    }
    currentAudioElement.src = ""
    currentAudioElement.volume = 0
    wrapdiv.style = "opacity: 0; transition: opacity 0.5s"
  }
}

// Fade in
let fadeAudioIn = (setVolume, fadeTime) => {
  let fadeInInterval = setInterval(() => {
    currentAudioElement.volume += setVolume / fadeTime / 10

    // accounts for float error
    if (currentAudioElement.volume + setVolume / fadeTime / 10 >= setVolume) {
      clearInterval(fadeInInterval)
      currentAudioElement.volume = setVolume
    }
  }, 100)
}

// Fade out
let fadeAudioOut = (currentVolume, currentTime, fadeTime) => {
  // switch audio element to avoid gap in audio
  let fadingOutAudio = currentAudioElement == audio1 ? audio1 : audio2
  currentAudioElement = currentAudioElement == audio2 ? audio1 : audio2

  fadingOutAudio.controls = false
  currentAudioElement.controls = true

  let fadeOutInterval = setInterval(() => {
    fadingOutAudio.volume -= currentVolume / fadeTime / 10

    // accounts for float error
    if (fadingOutAudio.volume - currentVolume / fadeTime / 10 <= 0) {
      clearInterval(fadeOutInterval)
      fadingOutAudio.volume = 0
    }
  }, 100)
}

// Thanks Seymour
const getTitle = (link) => {
  link = link.split('/');
  link = link[link.length - 1];
  link = decodeURI(link);
  link = link.split('.');
  link.pop();
  return link.join('.');
};

createSoundBar()
updateaudio()

//console.log(audiolist)

MSPFA.slide.push(() => {
  updateaudio()
});