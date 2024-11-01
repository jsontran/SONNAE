import * as THREE from "three";

const AnimationHandler = (
  models: { [key: string]: THREE.Object3D | null },
  mouse: { x: number; y: number },
  scrollY: number
) => {
  if (models.kirby) {
    const time = performance.now() * 0.001;
    models.kirby.position.y = -11.6 + Math.sin(time * 2) * 0.1;
  }
  if (models.mimi) {
    const time = performance.now() * 0.001;
    models.mimi.rotation.y = Math.sin(time) * 0.05;
  }
  if (models.computer) {
    models.computer.rotation.y += 0.001;
  }
  if (models.dancer) {
    models.dancer.rotation.x = (mouse.y - scrollY * 0.0033) * -0.15;
    models.dancer.rotation.y = mouse.x * 0.5 - 0.13;
  }
};

export default AnimationHandler;
