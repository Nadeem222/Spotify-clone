console.log('welcome');
let songIndex = 0;
let audioElement = new Audio ('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')

let songs =[
    {songName: "salame-ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salame-ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salame-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salame-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salame-ishq", filePath: "./song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salame-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salame-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salame-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},

]

//audioElement.play

//Habdle play/pause
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused  || audioElement.currrentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }else{
        audioElement.paused();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');    }
})

audioElement.addEventListener('timeUpdate' , ()=>{
    console.log('timeUpdate')
    progress = parseInt(audioElement.currentTime/audioElement.duration)*100;
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
