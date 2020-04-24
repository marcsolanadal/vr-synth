function Button(scene) {
  const entity = document.createElement("a-entity");
  entity.setAttribute("log", "message: mother of loelere");
  entity.setAttribute("oscillator", "");

  scene.appendChild(entity);
}

const scene = document.querySelector("a-scene");

Button(scene);
