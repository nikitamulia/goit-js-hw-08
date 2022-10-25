import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_KEY);

const onPlay = function(data) {
   localStorage.setItem(STORAGE_KEY, data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentTime).catch(function(error) {
    console.log(error);
});

