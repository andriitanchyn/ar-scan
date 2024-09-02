import * as assets from './assets.json';

const showTargetVideo = (id, el) => {
  const video = document.querySelector(`[id="${id}"]`);

  if (video && video.setAttribute) {
    video.setAttribute('src', assets[id]);
    video.play();
  } else {
    console.error('Element is not valid or does not support src attribute');
  }
}

const hideTargetVideo = (id, el) => {
  const video = el.querySelector('a-video');
  video.pause();
}

function init() {
  const id = this.el.dataset.id;
  this.el.addEventListener('targetFound', () => {
    console.log("target found", id);
    showTargetVideo(id, this.el);
  });
  this.el.addEventListener('targetLost', () => {
    console.log("target lost", id);
    hideTargetVideo(id, this.el);
  });
}

// eslint-disable-next-line no-undef
AFRAME.registerComponent('videotarget', {
  init: function () {
    init.call(this);
  },
});

// eslint-disable-next-line no-undef
AFRAME.registerComponent('mindartarget', {
  init: function () {
    const id = this.el.dataset.id;
    this.el.addEventListener('targetFound', () => {
      console.log("====target found=====", id);
      const gltf = this.el.firstChild;
      if (gltf && gltf.setAttribute) {
        gltf.setAttribute('src', assets[id]);
      } else {
        console.error('Element is not valid or does not support src attribute');
      }
    });
    this.el.addEventListener('targetLost', () => {
      console.log("====target lost=====", id);
    });
  }
});