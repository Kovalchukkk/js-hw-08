import Player from '@vimeo/player';

// define the player
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const savedTiming = localStorage.getItem('videoplayer-current-time');

if (savedTiming) {
  const savedTimingParsed = JSON.parse(savedTiming);
  console.log('savedTiming: ', savedTimingParsed);
  const secondsTime = savedTimingParsed.seconds;

  player
    .setCurrentTime(secondsTime)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

// timeupdate
player.on('timeupdate', onTime);

function onTime(data) {
  const videoplayerCurrentTime = JSON.stringify(data);
  localStorage.setItem('videoplayer-current-time', videoplayerCurrentTime);
}
