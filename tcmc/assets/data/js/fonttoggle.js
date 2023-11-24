// Font enable/disable checkbox

const fontLabel=document.createElement('label');
const fontInput=document.createElement('input');
fontInput.type='checkbox';
fontInput.checked=true;
fontLabel.appendChild(document.createTextNode('Enable custom font: '));
fontLabel.appendChild(fontInput);

const adventureInfo=document.querySelector('#infobox table tr:last-child span');
adventureInfo.appendChild(document.createElement('br'));
adventureInfo.appendChild(document.createElement('br'));
adventureInfo.appendChild(fontLabel);

const fontStyle=document.querySelector('#font');
const styleParent=fontStyle.parentNode;

if(localStorage.pirateFont!==undefined&&localStorage.pirateFont=="false") {
    styleParent.removeChild(fontStyle);
    fontInput.checked=false;
}

fontInput.addEventListener('change',() => {
    localStorage.customFont=fontInput.checked;

    if(localStorage.customFont!=="false") {
        styleParent.appendChild(fontStyle);
    } else {
        styleParent.removeChild(fontStyle);
    }
});