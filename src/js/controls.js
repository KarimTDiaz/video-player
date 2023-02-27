import { videoElement } from './consts.js';

const currentTimeElement = document.getElementById('current-time');
const totalTimeElement = document.getElementById('total-time');
const stopElement = document.getElementById('stop');

/* let currentTime = Math.round(videoElement.currentTime); */

const playVideo = playBtn => {
  if (videoElement.paused) {
    videoElement.play();
    playBtn.textContent = 'PAUSE';
  } else {
    videoElement.pause();
    playBtn.textContent = 'PLAY';
  }
  console.dir(videoElement);
};

const videoTiming = () => {
  currentTimeElement.textContent = Math.round(videoElement.currentTime);
  totalTimeElement.textContent = Math.round(videoElement.duration);
};

const stopVideo = playBtn => {
  videoElement.pause();
  videoElement.currentTime = 0;
  if ((playBtn.textContent = 'PAUSE')) {
    playBtn.textContent = 'PLAY';
  }
};

const setTime = ev => {
  if (ev.classList.contains('time-up')) {
    videoElement.currentTime += 15;
  } else {
    videoElement.currentTime -= 15;
  }
  console.log(ev);
};
export { playVideo, videoTiming, stopVideo, setTime };
