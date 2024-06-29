document.getElementById('playPauseBtn').addEventListener('click', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playPauseBtn = document.getElementById('playPauseBtn');
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.src = 'svg/1pause.svg';
    } else {
        audioPlayer.pause();
        playPauseBtn.src = 'svg/1play.svg';
    }
});