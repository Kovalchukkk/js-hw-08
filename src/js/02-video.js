// define the player
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const savedTiming = localStorage.getItem('videoplayer-current-time');

// timeupdate
player.on('timeupdate', onTime);

function onTime(data) {
  const videoplayerCurrentTime = JSON.stringify(data);
  localStorage.setItem('videoplayer-current-time', videoplayerCurrentTime);
}
