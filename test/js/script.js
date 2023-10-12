const options = {
  fullscreen: {
    enabled: true,
    iosNative: false
  },
  controls: [
    "play-large",
    "play",
    "progress",
    "duration",
    "mute",
    "volume",
    "fullscreen"
  ],
  muted: true,
  storage: { enabled: false }
};

const optionsIOS = {
  ...options,
  fullscreen: {
    enabled: true,
    iosNative: true
  }
};
const player = new Plyr(document.querySelector(".player"), options);

const playerIOS = new Plyr(document.querySelector(".player-ios"), optionsIOS);