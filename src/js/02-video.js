import Player from '@vimeo/player';
// console.log(Player);

const iframe = document.querySelector('#vimeo-player');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const getCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);
console.log(getCurrentTime);

const iframePlayer = new Player(iframe);

iframePlayer.on('play', onPlay);

function onPlay(evt) {
  console.log(evt);
  console.log('played the video!');

  const seconds = evt.seconds;
  
}



iframePlayer
  .getCurrentTime()
  .then(function (seconds) {
    console.log(seconds);
    const JSON_seconds = JSON.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON_seconds);
  })
  .catch(function (error) {
    console.log(error);
  });


