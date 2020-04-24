AFRAME.registerComponent("log", {
  schema: {
    message: { type: "string", default: "Hello, World!" },
  },
  init: function () {
    console.log("sweeet", this.data.message);
  },
});

AFRAME.registerComponent("oscillator", {
  init: () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    let osc = audioCtx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 440;

    osc.connect(audioCtx.destination);
    // osc.start();
    // osc.stop(audioCtx.currentTime + 1);
  },
});
