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
  changeTimingBar,
  setIconVolume,
  getLocalCurrentTime
} from './controls.js';
import { videoElement } from './consts.js';

const playElement = document.getElementById('play-icon');
const stopElement = document.getElementById('stop');
const setTimeElement = document.getElementById('set-time');
const volumeRangeElement = document.getElementById('volume');
const timingBarElement = document.getElementById('timing-bar');

playElement.addEventListener('click', ev => {
  playVideo(playElement);
  buttonPlayPause(playElement);
});

videoElement.addEventListener('timeupdate', () => {
  videoCurrentTiming(timingBarElement);
  changeTimingBar();
});

videoElement.addEventListener('loadedmetadata', ev => {
  videoFixedTiming();
});

stopElement.addEventListener('click', ev => {
  stopVideo(playElement);
});

setTimeElement.addEventListener('click', ev => {
  setTime(ev.target);
});

volumeRangeElement.addEventListener('change', ev => {
  setVolume(ev.target.value);
  setIconVolume(ev.target.value);
});

timingBarElement.addEventListener('click', ev => {
  setTimingBar(ev);
});

window.addEventListener('keyup', ev => {
  if (ev.code === 'Space') {
    playVideo();
    buttonPlayPause(playElement);
  }
});

window.addEventListener('load', e => {
  getLocalCurrentTime();
});
