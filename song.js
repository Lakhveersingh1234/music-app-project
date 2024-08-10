let songname=document.querySelector("#songname");
let singername=document.querySelector("#singername");
let songimage=document.querySelector(".img");
let playpause=document.querySelector("#play-pause");
let index=1;
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
}
loadtrack(index);

function playPause(){
    if(playingsong==false){
        playSong();

    }
    else{
        pauseSong();
    }
}

function playSong(){
    track.play();
    playingsong=true;
 playpause.src="pause.png";

}

function pauseSong(){
    track.pause();
    playingsong=false;
    playpause.src="play.png";
}