import { videoElement } from './consts.js';
import iconMute from '../assets/volume-mute.svg';
import iconVolumeLow from '../assets/volume-low.svg';
import iconVolumeHigh from '../assets/volume-high.svg';
import iconPlay from '../assets/play.png';
import iconPause from '../assets/pause.png';

const currentTimeElement = document.getElementById('current-time');
const fixedTimeElement = document.getElementById('total-time');
const iconVolumeElement = document.getElementById('volume-icon');
const LS = localStorage;

const rootStyles = document.documentElement.style;

const getLocalCurrentTime = () => {
  videoElement.currentTime = LS.getItem('localCurrentTime');
};

const playVideo = () => {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
  console.dir(videoElement);
};
const buttonPlayPause = playBtn => {
  if (videoElement.paused) {
    playBtn.src = iconPlay;
  } else {
    playBtn.src = iconPause;
  }
};

const stopVideo = playBtn => {
  videoElement.pause();
  videoElement.currentTime = 0;
  playBtn.src = iconPlay;
};

const videoCurrentTiming = () => {
  let date = new Date(null);
  date.setSeconds(videoElement.currentTime);
  let result = date.toISOString().slice(14, 19);
  currentTimeElement.textContent = result;
  LS.setItem('localCurrentTime', videoElement.currentTime);
};

const videoFixedTiming = () => {
  const dateTotal = new Date(null);
  dateTotal.setSeconds(videoElement.duration);
  const resultTotal = dateTotal.toISOString().slice(14, 19);
  currentTimeElement.textContent = '00:00';
  fixedTimeElement.textContent = resultTotal;
};

const setTime = ev => {
  console.log(ev);
  if (ev.classList.contains('video-speed__item--up')) {
    videoElement.currentTime += 10;
  } else {
    videoElement.currentTime -= 10;
  }
};

const setVolume = value => {
  let volume = value / 9;
  videoElement.volume = volume;
};

const setIconVolume = value => {
  if (value === '0') {
    iconVolumeElement.src = iconMute;
  } else if (value > '0' && value <= '6') {
    iconVolumeElement.src = iconVolumeLow;
  } else {
    iconVolumeElement.src = iconVolumeHigh;
  }
};

const setTimingBar = pointerPosition => {
  videoElement.currentTime =
    (videoElement.duration * pointerPosition.offsetX) /
    pointerPosition.target.clientWidth;
};

const changeTimingBar = () => {
  let barTime = (videoElement.currentTime * 100) / videoElement.duration + '%';
  rootStyles.setProperty('--timing-bar', barTime);
};

export {
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
};
