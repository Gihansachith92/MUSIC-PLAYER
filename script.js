const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// music
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design',
  },{
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  },
];


// check if playing
let isPlaying = false;

// play
function playSong(){
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// pause
function pauseSong(){
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// play or pause event listner
playBtn.addEventListener('click', ()=> (isPlaying ? pauseSong() : playSong()));


// update dom
function loadSong(song){
  title.textContent  = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// current song
let songIndex = 0;

// prev song
function prevSong(){
  songIndex --;
  if(songIndex < 0){
    songIndex = songs.length-1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// next song
function nextSong(){
  songIndex ++;
  if(songIndex > songs.length-1){
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// onload select first song
loadSong(songs[songIndex]);

// event listners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
