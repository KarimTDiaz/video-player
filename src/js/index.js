// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import {
  playVideo,
  videoCurrentTiming,
  stopVideo,
  setTime,
  buttonPlayPause,
  setVolume,
  setTimingBar,
  videoFixedTiming,
  changeTimingBar
} from './controls.js';
import { videoElement } from './consts.js';

const playElement = document.getElementById('play');
const stopElement = document.getElementById('stop');
const setTimeElement = document.getElementById('set-time');
const volumeElement = document.getElementById('volume');
const timingBarElement = document.getElementById('timing-bar');

videoFixedTiming();

playElement.addEventListener('click', ev => {
  playVideo(playElement);
  buttonPlayPause(playElement);
});

videoElement.addEventListener('timeupdate', () => {
  videoCurrentTiming(timingBarElement);
  changeTimingBar();
});

stopElement.addEventListener('click', ev => {
  stopVideo(playElement);
});

setTimeElement.addEventListener('click', ev => {
  setTime(ev.target);
});

volumeElement.addEventListener('change', ev => {
  setVolume(ev.target.value);
});

timingBarElement.addEventListener('click', ev => {
  setTimingBar(ev);
});
