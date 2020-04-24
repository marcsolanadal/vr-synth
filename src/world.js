function Test() {
  const entity = document.createElement("a-entity");
  entity.setAttribute("log", "message: mother of loelere");
  entity.setAttribute("oscillator", "");

  return entity;
}

function Button() {
  const entity = document.createElement("a-box");
  entity.setAttribute("position", "-1 0.5 -3");
  entity.setAttribute("rotation", "0 45 0");
  entity.setAttribute("color", "#4CC3D9");

  entity.addEventListener("raycaster-intersected", () => {
    entity.setAttribute("color", "#FF0000");
  });

  entity.addEventListener("raycaster-intersected-cleared", () => {
    entity.setAttribute("color", "#4CC3D9");
  });

  return entity;
}

const scene = document.querySelector("a-scene");

const entities = [Test, Button];
entities.forEach((entity) => scene.appendChild(entity()));
