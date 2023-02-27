import { videoElement } from './consts.js';

const currentTimeElement = document.getElementById('current-time');
const totalTimeElement = document.getElementById('total-time');
const stopElement = document.getElementById('stop');


const rootStyles = document.documentElement.style;

const playVideo = playBtn => {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};

const stopVideo = playBtn => {
  videoElement.pause();
  videoElement.currentTime = 0;
  if (videoElement.paused) {
    playBtn.textContent = 'PLAY';
  } else {
    playBtn.textContent = 'PAUSE';
  }
};

const buttonPlayPause = (playBtn) => {
  if (videoElement.paused) {
    playBtn.textContent = 'PLAY';
  } else {
    playBtn.textContent = 'PAUSE';
  }
}

const videoTiming = (timingBar) => {
  let barTime = ((videoElement.currentTime * 100) / videoElement.duration) + '%';
  let date = new Date(null);
  date.setSeconds(videoElement.currentTime);
  let result = date.toISOString().slice(11,19);
  const dateTotal = new Date(null);
  dateTotal.setSeconds(videoElement.duration);
  const resultTotal = dateTotal.toISOString().slice(11,19);
  currentTimeElement.textContent = result;
  totalTimeElement.textContent = resultTotal;
  rootStyles.setProperty('--timing-bar', barTime);
  
};

const setTime = ev => {
  if (ev.classList.contains('time-up')) {
    videoElement.currentTime += 15;
  } else {
    videoElement.currentTime -= 15;
  }
};

const setVolume = value => {
let volume = value/10;
videoElement.volume = volume
};

const timingBar = (pointerPosition) => {
   videoElement.currentTime = (videoElement.duration * pointerPosition.offsetX) / pointerPosition.target.clientWidth
};




export { playVideo, videoTiming, stopVideo, setTime, buttonPlayPause, setVolume, timingBar };
