function Test() {
  const entity = document.createElement("a-entity");
  entity.setAttribute("log", "message: mother of loelere");
  // entity.setAttribute("oscillator", "");

  return entity;
}

function Button() {
  const entity = document.createElement("a-box");
  // entity.setAttribute("haptics", "");
  // entity.setAttribute("visible", true);
  // entity.setAttribute("id", "test_box");
  entity.className = "collidable";
  entity.setAttribute("position", "-0.1 0.5 -1");
  entity.setAttribute("rotation", "0 0 0");
  entity.setAttribute("color", "#4CC3D9");
  // entity.setAttribute("height", "0.05");
  // entity.setAttribute("width", "0.1");
  // entity.setAttribute("depth", "0.1");

  // const template = `
  //   <a-box
  //     haptics
  //     id="box_#1"
  //     height="0.05"
  //     width="0.1"
  //     depth="0.1"
  //     position="-0.1 0.5 -1"
  //     rotation="0 0 0"
  //     color="#4CC3D9"
  //   ></a-box>
  // `;
  // entity.innerHTML = template;

  entity.addEventListener("raycaster-intersected", () => {
    entity.setAttribute("color", "#FF0000");
    // entity.setAttribute("oscillator", "");
  });

  entity.addEventListener("raycaster-intersected-cleared", () => {
    entity.setAttribute("color", "#4CC3D9");
  });

  return entity;
}

const scene = document.createElement("a-scene");
scene.innerHTML = `
  <a-sky color="#FFDAB9"></a-sky>
  <a-entity
    id="leftHand"
    hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"
    raycaster="far: 10; showLine: true; objects: .collidable"
  ></a-entity>
  <a-entity
    id="rightHand"
    hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"
    raycaster="far: 10; showLine: true; objects: .collidable"
  ></a-entity>
`;

document.body.appendChild(scene);

const entities = [Test, Button];
entities.forEach((entity) => scene.appendChild(entity()));
