let songname=document.querySelector("#songname");
let singername=document.querySelector("#singername");
let songimage=document.querySelector(".img");
let playpause=document.querySelector("#play-pause");
let volumecontrol=document.querySelector('#vol-range');
let songRange=document.querySelector('.vol-range');
let volumemute=document.querySelector('#volumesvg');
let play=document.querySelector('#play');

let index=0;
let playingsong=false;
let track=document.createElement("audio")
let songs=[
    {
   name:"Gurmukhi da beta",
   singername:"satinder Sartaj",
   image:"img1.jpeg",
   path:"song1.mp3",
    },
    {
   name:"suttey rehan de panchi",
   singername:"satinder Sartaj",
   image:"img2.jpeg",
   path:"song2.mp3",
    },
    {
   name:"tere vaste",
   singername:"satinder Sartaj",
   image:"img3.jpeg",
   path:"song3.mp3",
    },
]
function loadtrack(index){
   track.src=songs[index].path;
   songname.innerHTML=songs[index].name;
   singername.innerHTML=songs[index].singername;
   songimage.style=`background-image: url("${songs[index].image}");`
   volume()
   duration()
   setInterval(()=>{
    songRange.max=track.duration
    songRange.value=track.currentTime
   },1000)
   track.load()

}
loadtrack(index);

function playPause(){
    if(playingsong==false){
        playSong();
        songimage.classList.add('rotating')


    }
    else{
        pauseSong();
        songimage.classList.remove('rotating')
    }
}

function playSong(){
    track.play();
    playingsong=true;
    playpause.src="pause.png";
    play=true

}

function pauseSong(){
    track.pause();
    playingsong=false;
    playpause.src="play.png";

}
function nextsong(){
    if(index<songs.length-1){
        index++;
        loadtrack(index)
        playSong()
    }
    else{
        index=-1;
        loadtrack()
        playSong()

    }
}
function previous(){
    if(index>0){
        index--;
        loadtrack(index)
        playSong()
    }
    else{
        index=songs.length-0;
        loadtrack()
        playSong()

    }
}
function volume(){
    track.volume=volumecontrol.value/100
    if(volumecontrol.value==0){
         volumemute.src="mute.png"
    }
    else{
        volumemute.src="volume.png"
    }
}
function duration(){
    track.currentTime=songRange.value;
}