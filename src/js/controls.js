import { videoElement } from './consts.js';

const currentTimeElement = document.getElementById('current-time');
const fixedTimeElement = document.getElementById('total-time');
const stopElement = document.getElementById('stop');
const iconVolumeElement = document.getElementById('volume-icon');

const rootStyles = document.documentElement.style;

const playVideo = playBtn => {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};
const buttonPlayPause = playBtn => {
  playBtn.classList.toggle('video__status-item--pause');
};

const stopVideo = playBtn => {
  videoElement.pause();
  videoElement.currentTime = 0;
  playBtn.classList.remove('video__status-item--pause');
};

const videoCurrentTiming = timingBar => {
  let date = new Date(null);
  date.setSeconds(videoElement.currentTime);
  let result = date.toISOString().slice(14, 19);
  currentTimeElement.textContent = result;
};

const videoFixedTiming = () => {
  const dateTotal = new Date(null);
  dateTotal.setSeconds(videoElement.duration);
  const resultTotal = dateTotal.toISOString().slice(14, 19);
  currentTimeElement.textContent = '00:00';
  fixedTimeElement.textContent = resultTotal;
};

const setTime = ev => {
  if (ev.classList.contains('time-up')) {
    videoElement.currentTime += 15;
  } else {
    videoElement.currentTime -= 15;
  }
};

const setVolume = value => {
  if (value === 0) {
    iconVolumeElement.classList.remove('volume__icon--low');
    iconVolumeElement.classList.remove('volume__icon--high');
    iconVolumeElement.classList.add('volume__icon--mute');
  } else if (value > 0 && value <= 8) {
    iconVolumeElement.classList.remove('volume__icon--mute');
    iconVolumeElement.classList.remove('volume__icon--high');
    iconVolumeElement.classList.add('volume__icon--low');
  } else if (value > 8) {
    iconVolumeElement.classList.remove('volume__icon--mute');
    iconVolumeElement.classList.remove('volume__icon--low');
    iconVolumeElement.classList.add('volume__icon--high');
  }
  let volume = value / 10;
  videoElement.volume = volume;
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
  changeTimingBar
};
