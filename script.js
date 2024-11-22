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

// Listen for Play/Pause button click
playBtn.addEventListener('click', () => {

    // Check if a song is playing
    const isPlaying = musicContainer.classList.contains('play');

     if(isPlaying){

        pauseSong(); 

     } else {

        playSong();

     }

});

// Listen for Prev/Next button clicks
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Listen for timeupdate event in audio element
audio.addEventListener('timeupdate', updateProgress);

// Listen for click event on progress container element
progressContainer.addEventListener('click', setProgress);


/* Event Listener Setup

   - timeupdate event fires continuously as the audio plays, 
     approximately 4–66 times per second (depending on the browser). 

   - It triggers the updateProgress function every time the playback time changes.
   
   */




function playSong(){

    // Add .play class
    musicContainer.classList.add('play');

    // Select <i class='fas'> to change icon
    playBtn.querySelector('i.fas').classList.remove('fa-play'); // Remove play icon
    playBtn.querySelector('i.fas').classList.add('fa-pause'); // Add pause icon

    // Play Audio
    audio.play();

}


function pauseSong(){

    // Remove .play class
    musicContainer.classList.remove('play');

    // Select <i class='fas'> to change icon
    playBtn.querySelector('i.fas').classList.add('fa-play'); // Add play icon
    playBtn.querySelector('i.fas').classList.remove('fa-pause'); // Remove pause icon


    // Pause Audio
    audio.pause();

}



function prevSong(){
 
    songIndex-- // Decrease Index

    // If index is negative
    if(songIndex < 0){

        // Go to last song
        songIndex = songs.length - 1;

    }

    // Load song
    loadSong(songs[songIndex]);

    // Play song
    playSong();
    
}


function nextSong(){

    songIndex++ // Increase Index

    // If index is at the end
    if(songIndex > songs.length - 1){ 
    // songs.length - 1 = because index starts from 0

        // Go to first song
        songIndex = 0;

         // Load song
        loadSong(songs[songIndex]);

        // Play song
        playSong();

    }

    // Load song
    loadSong(songs[songIndex]);

    // Play song
    playSong();

}


function updateProgress(){

    // Get audio's current time & duration
    const {duration, currentTime} = audio;

    // Calculate current progress
    const progressPercent = (currentTime / duration) * 100;

    // Update progress bar width
    progress.style.width = `${progressPercent}%`;

}

function setProgress(event){
    
    // Get progressContainer total width
    const width = progressContainer.clientWidth;

    // Get clicked spot within the container
    const clickX = event.offsetX;

    console.log(clickX);

}