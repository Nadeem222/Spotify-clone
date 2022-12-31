console.log('welcome');
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let songItems = Array.from (document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Warriyo-Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "CIelo-Huma-Huma ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DFAF KEV-Invicible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EHIDE", filePath: "songs/9.mp3", coverPath: "covers/10.jpg" },
    { songName: "Janji Heroes-Tonight", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Rabba -Salam-e-ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Sakhiya-salame-ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Bhula DEna -salame-ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tumhari Kasam-salame-ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Na Janna-salame-ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },

]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].filePath;
});
//audioElement.play

//Habdle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currrentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
    progress = parseInt(audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
