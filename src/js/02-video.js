import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// let throttle = require('lodash.throttle');


const iframeEl =document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on("timeupdate",throttle(getCurrentTime,1000));



function getCurrentTime({seconds}){
    localStorage.setItem("videoplayer-current-time",seconds);
}
if (localStorage.getItem("videoplayer-current-time")){
    const currentPlayTime = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(currentPlayTime);
}
