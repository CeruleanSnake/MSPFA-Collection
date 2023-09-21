var PlayListTemp = "";
var PlaylistTrack = "0";

var TrackList = [{
        Url: "./assets/sound/music/The Cerulean Motley Crew.mp3",
        Title: "The Cerulean Motley Crew",
        Track: "1",
        Page: "",
        PageUrl: "",
        Art: "./assets/sound/music/The Cerulean Motley Crew.png",
    },
    {
        Url: "./assets/sound/music/Pirates Awakening.mp3",
        Title: "Pirate's Awakening",
        Track: "2",
        Page: "Page 100",
        PageUrl: "./?p=100",
        Art: "./assets/sound/music/Pirates Awakening.png",
    },
    {
        Url: "./assets/sound/music/Friday Night Plunderin.mp3",
        Title: "Friday Night Plunderin'",
        Track: "3",
        Page: "Page 200",
        PageUrl: "./?p=200",
        Art: "./assets/sound/music/Friday Night Plunderin.png",
    },
]
PlayListTemp = TrackList;

$(document).ready(function () {
    List(1);

    $(".playlist ul li").click(function () {
        PlaySound($(this).attr("id"));
    });
});

function log(x) {
    console.log("--> " + x)
}

function List(x) {
    var ListCash = "";
    if (x == 1) {
        PlayListTemp = TrackList;
    }

    for (var z = 0; z < PlayListTemp.length; z++) {

        ListCash += "<li id='" + z + "'><span class='listname'>" + TrackList[z].Title + "</span></span><a href='" + PlayListTemp[z].Url + "'class='downloadbutton'><i class='fa fa-download'></i></a><span class='listpage'>" + "<a href='" + TrackList[z].PageUrl + " '>" + TrackList[z].Page + "</a></li>";
    }
    $('.playlist ul').html(ListCash);
}

function PlaySound(x) {
    PlaylistTrack = x;
    $(".artcard albumart").html("<img style='max-width: 70%;' src='" + PlayListTemp[x].Art + "'>");

    $(".artcard p").html("<textfx class='vwave'>" + PlayListTemp[x].Title + "</textfx>");

    $(".musicplayer").html("<audio id='audiocontainer' controls controlsList='noaudio'><source src='" + PlayListTemp[x].Url + "'type='audio/mpeg'>Your browser does not support HTML5 Audio.</audio>")
}

window.onclick = function () {
    shakeText('shake');
    shakeText('wave');
    shakeText('textfx');
}