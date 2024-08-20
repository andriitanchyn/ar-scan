const showTargetVideo = (id) => {
  const video = document.querySelector(`[id="${id}"]`);
  video.play();
}

const hideTargetVideo = (id) => {
  const video = document.querySelector(`[id="${id}"]`);
  video.pause();
}

function init() {
  const id = this.el.dataset.id;
  this.el.addEventListener('targetFound', () => {
    console.log("target found", id);
    showTargetVideo(id);
  });
  this.el.addEventListener('targetLost', () => {
    console.log("target lost", id);
    hideTargetVideo(id);
  });
}

// eslint-disable-next-line no-undef
AFRAME.registerComponent('videotarget003', {
  init: function () {
    init.call(this);
  }
});

// eslint-disable-next-line no-undef
AFRAME.registerComponent('videotarget005', {
  init: function () {
    init.call(this);
  },
});

// eslint-disable-next-line no-undef
AFRAME.registerComponent('videotarget007', {
  init: function () {
    init.call(this);
  },
});

// eslint-disable-next-line no-undef
AFRAME.registerComponent('videotarget014', {
  init: function () {
    init.call(this);
  },
});