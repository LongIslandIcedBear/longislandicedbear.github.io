document.getElementById('playPauseBtn').addEventListener('click', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playPauseBtn = document.getElementById('playPauseBtn');
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.src = '../svg/1pause.svg';
    } else {
        audioPlayer.pause();
        playPauseBtn.src = '../svg/1play.svg';
    }
});

// Update the timer as the audio plays
document.getElementById('audioPlayer').addEventListener('timeupdate', function() {
    updateTimer(audioPlayer.currentTime, audioPlayer.duration);
});

// Update the timer when the audio metadata is loaded
document.getElementById('audioPlayer').addEventListener('loadedmetadata', function() {
    updateTimer(0, audioPlayer.duration);
    var timer = document.getElementById('timer');
    timer.textContent = '0:00 / ' + formatTime(audioPlayer.duration);
});

// Update the timer when the audio ends
document.getElementById('audioPlayer').addEventListener('ended', function() {
    var playPauseBtn = document.getElementById('playPauseBtn');
    playPauseBtn.src = '../svg/1play.svg';
    updateTimer(audioPlayer.duration, audioPlayer.duration);
});

// Function to update the timer display
function updateTimer(currentTime, duration) {
    var timer = document.getElementById('timer');
    timer.textContent = formatTime(currentTime) + ' / ' + formatTime(duration);
}

// Function to format time in m:ss
function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var seconds = Math.floor(seconds % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
}

// Reset the timer to 0:00 when play is pressed again
document.getElementById('playPauseBtn').addEventListener('click', function() {
    if (audioPlayer.paused) {
        updateTimer(0, audioPlayer.duration);
    }
});
