console.log("Text Effects by seymour schlong - https://mspfa.com/?s=35015");
const shakeText = (a) => {
    let shakeElements = document.querySelectorAll(a);

    for (let i = 0; i < shakeElements.length; i++) {
        let text = shakeElements[i].textContent;
        shakeElements[i].textContent = '';
        for (let char of text) {
            if (char === ' ') char = ' ';
            let newSpan = document.createElement('span');
            newSpan.className = a;
            newSpan.textContent = char;
            shakeElements[i].appendChild(newSpan);
        }
    }
}

const generateDistance = (intensity) => {
    if (isNaN(intensity)) intensity = 3;
    return Math.floor(Math.random() * intensity - intensity / 2) * 0.5;
}
setInterval(() => {
    document.querySelectorAll('.shake').forEach(elm => {
        let intense = elm.parentNode.getAttribute('intensity');
        elm.style = `transform: translate(${generateDistance(parseInt(intense))}px, ${generateDistance(parseInt(intense))}px);`
    });
}, 35);

//if (MSPFA.story.i !== 35015) {
//    shakeText('shake');
//    shakeText('wave');
//    shakeText('textfx');
//} else {
//    MSPFA.import("/js/?s=44554");
//}

MSPFA.slide.push(p => {
    shakeText('shake');
    shakeText('wave');
    shakeText('textfx');
});