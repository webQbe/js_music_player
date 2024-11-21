// Define DOM Elements
const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Songs Array
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of songs
let songIndex = 0; // Index 2 = ukulele

// Update song details
loadSong(songs[songIndex]); // Pass song to loadSong() from array using index

// Define loadSong()
function loadSong(song){
    // Update DOM Elements
    title.innerHTML = song; 
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`; 
}

// Event Listeners
playBtn.addEventListener('click', () => {

    // Check if a song is playing
    const isPlaying = musicContainer.classList.contains('play');

     if(isPlaying){

        pauseSong(); 

     } else {

        playSong();

     }

});


function playSong(){

    // Add .play class
    musicContainer.classList.add('play');

    // Select <i class='fas'> to change icon
    playBtn.querySelector('i.fas').classList.remove('fa-play'); // Remove play icon
    playBtn.querySelector('i.fas').classList.add('fa-pause'); // Add pause icon

}


function pauseSong(){

    // Remove .play class
    musicContainer.classList.remove('play');

    // Select <i class='fas'> to change icon
    playBtn.querySelector('i.fas').classList.add('fa-play'); // Add play icon
    playBtn.querySelector('i.fas').classList.remove('fa-pause'); // Remove pause icon

}



