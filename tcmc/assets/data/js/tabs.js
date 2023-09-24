function opentab(evt, spoilertab) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(spoilertab).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementsByTagName('button')[0].addEventListener('click', e => e.preventDefault());
}

MSPFA.slide.push(p => {
    if ($("#authorbtn").length) {
        document.getElementById("authorbtn").onclick = function () {
            opentab(event, 'author')
        };
    }
    if ($("#userbtn").length) {
        document.getElementById("userbtn").onclick = function () {
            opentab(event, 'user')
        };
    }
});

$(document).ready(function () {
    $("#prevlinks").click(function () {
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    })
});

$(document).ready(function () {
    $("#links").click(function () {
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    })
});

window.addEventListener("keydown", function (evt) {
    if (evt.key == "ArrowRight") {
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    }

    if (evt.key == "ArrowLeft") {
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    }
})