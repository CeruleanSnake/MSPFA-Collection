//const overlay = document.querySelector('#infobox #overlay');
const overlay = document.querySelector('#overlay');
if (overlay) {
    let overlayAmt = parseInt(overlay.getAttribute('data-amt'));
    if (isNaN(overlayAmt)) overlayAmt = 1;
    for (let i = 0; i < overlayAmt; i++) {
        const newChild = document.createElement('div');
        newChild.className = `overlay-${i+1}`;
        overlay.appendChild(newChild);
    }
    document.querySelector('#container').appendChild(overlay);
}

console.log("Image Overlay by seymour schlong - https://mspfa.com/?s=37172");

// Sample adventure specific (so the style can be shown for each example)
//if (MSPFA.story.i === 37172) {
//    MSPFA.slide.push(() => {
//        document.querySelectorAll('#slide textarea, #slide style').forEach(textarea => {
//            textarea.textContent = textarea.textContent.replace(/<br>/g, '\n').replace(/    /g, '\t').replace(/&nbsp;/g, ' ');
//        });

//        const style = document.querySelector('#slide style');
//        if (style) {
//            const textarea = document.createElement('textarea');
//            textarea.textContent = style.textContent.replace('\n', '');
//            textarea.setAttribute('rows', 10);
//            textarea.setAttribute('readonly', true);
//            document.querySelector('#content > span').appendChild(textarea);
//        }
//    });

//    MSPFA.import("/js/?s=44554");
//}