require("aframe");
require("aframe-haptics-component");

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
    osc.start();
    osc.stop(audioCtx.currentTime + 1);
  },
});

AFRAME.registerComponent("collider-check", {
  dependencies: ["raycaster"],

  init: function () {
    this.el.addEventListener("raycaster-intersection", function (event) {
      event.el.setAttribute("color", "#00FF00");
    });
  },
});
