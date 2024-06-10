var video = document.getElementById('background-video')
var clicks = 0

document.getElementById('mute-button').addEventListener('click', function() {
    if (clicks == 0) {
        video.play()
        clicks++
        video.muted = false
        return
    }
    if (video.muted == true) {
        video.muted = false
    } else {
        video.muted = true
    }
});