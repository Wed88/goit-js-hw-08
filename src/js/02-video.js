import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const player = new Player('vimeo-player', {
  id: 236203659,
  width: 640,
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
  localStorage.setItem('videoplayer-current-time', `${event.seconds}`);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
