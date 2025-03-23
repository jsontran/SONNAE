import * as THREE from "three";

// Define clear interfaces for the function parameters
interface ModelCollection {
  [key: string]: THREE.Object3D | null;
}

interface MousePosition {
  x: number;
  y: number;
}

/**
 * Handles the animation of 3D models based on mouse position and scroll
 * @param models Collection of 3D models to animate
 * @param mousePosition Current mouse position coordinates
 * @param scrollPosition Current page scroll position
 */
const animationHandler = (
  models: ModelCollection,
  mousePosition: MousePosition,
  scrollPosition: number
): void => {
  const time = performance.now() * 0.001;

  // Kirby model animation - floating effect
  if (models.kirby) {
    models.kirby.position.y = -10 + Math.sin(time * 2) * 0.1;
  }

  // Mimi model animation - gentle rotation
  if (models.mimi) {
    models.mimi.rotation.y = Math.sin(time) * 0.05;
  }

  // Computer model animation - continuous rotation
  if (models.computer) {
    models.computer.rotation.y += 0.001;
  }

  // Dancer model animation - follows mouse movement
  if (models.dancer) {
    models.dancer.rotation.x =
      (mousePosition.y - scrollPosition * 0.0033) * -0.15;
    models.dancer.rotation.y = mousePosition.x * 0.5 - 0.13;
  }
};

export default animationHandler;
