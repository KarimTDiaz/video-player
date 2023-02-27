// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import { playVideo, videoTiming, stopVideo, setTime } from './controls.js';
import { videoElement } from './consts.js';
import { comment } from 'postcss';
const currentTimeElement = document.getElementById('current-time');
const playElement = document.getElementById('play');
const stopElement = document.getElementById('stop');
const setTimeUp = document.getElementById('time-up');
const setTimeDown = document.getElementById('time-down');
const setTimeElement = document.getElementById('set-time');

playElement.addEventListener('click', ev => {
  playVideo(playElement);
});

videoElement.addEventListener('timeupdate', () => {
  videoTiming();
});

stopElement.addEventListener('click', ev => {
  stopVideo(playElement);
});

setTimeElement.addEventListener('click', ev => {
  setTime(ev.target);
});
