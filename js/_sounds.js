var audio = new Audio();
var video = null;
var currentAudio = "none";
var emelien = false
$(document).ready(function()
{
    video = document.getElementById("danceVideo");
    $(window).scroll(function(){
        if (!emelien) {
            if ($(window).scrollTop() > $("#zone11").position().top - $(window).height()/2) {
                if (currentAudio != "zone11") {
                    currentAudio = "zone11";
                    video.pause();
                }
            } else if ($(window).scrollTop() > $("#zone10").position().top - $(window).height()/2) {
                if (currentAudio != "zone10") {
                    currentAudio = "zone10";
                    audio.pause();
                    if (video != null)
                        video.play();
                }
            } else if ($(window).scrollTop() > $("#zone9").position().top - $(window).height()/2) {
                if (currentAudio != "zone9") {
                    currentAudio = "zone9";
                    audio.pause();
                    if (video != null)
                        video.pause();
                        audio.src = "audio/natuur.mp3";
                        audio.play();
                }
            } else if ($(window).scrollTop() > $("#zone6").position().top - $(window).height()/2) {
                if (currentAudio != "zone6") {
                    currentAudio = "zone6";
                    audio.pause();
                    audio.src = "audio/piano.mp3";
                    audio.play()
                }
            } else if ($(window).scrollTop() > $("#zone5").position().top - $(window).height()/2) {
                if (currentAudio != "zone5") {
                    currentAudio = "zone5";
                    audio.pause();
                    audio.src = "audio/rain.mp3";
                    audio.play();
                }
            } else if ($(window).scrollTop() > $("#zone4").position().top - $(window).height()/2) {
                if (currentAudio != "zone4") {
                    currentAudio = "zone4";
                    audio.pause();
                    audio.src = "audio/bbq.mp3";
                    audio.play();
                }
            } else if ($(window).scrollTop() > $("#zone3").position().top - $(window).height()/2) {
                if (currentAudio != "zone3") {
                    currentAudio = "zone3";
                    audio.pause();
                    audio.src = "audio/feesten.mp3";
                    audio.play();
                }
            } 
            else {
                currentAudio = "none";
                audio.pause();
            }
        }
    });
});

var nav = navigator.appName;
var ns = (nav.indexOf("Netscape") != -1);

if (ns) {
    if (document.layers) {
        document.captureEvents(Event.KEYPRESS);
        document.onkeypress = cheat;
    }
    if (document.getElementById) {
        document.onkeypress = cheat;
    }
}
else
{
    document.onkeypress = cheat;
}

var SpecialWord = "emelien";//verander hier je geheime woord
var SpecialLetter = 0;
var vcheat = false;
function cheat(keyStroke)
{
    var eventChooser = (ns) ? keyStroke.which : event.keyCode;
    var which = String.fromCharCode(eventChooser).toLowerCase();
    if (which == SpecialWord.charAt(SpecialLetter)) {
        SpecialLetter++;
        if (SpecialLetter == SpecialWord.length) {
            emelien = true;
            audio.pause();
            audio.src = "audio/perfect.mp3";
            audio.play();
        }
    }
    else {
        SpecialLetter = 0;
        vcheat = false
    }
}