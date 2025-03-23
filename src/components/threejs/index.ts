/**
 * ThreeJS Components Index
 * Centralizes all exports from the threejs folder for better organization and imports
 */

// Main components
export { default as ThreeDScene } from "./Scene";
export { default as ThreeJsLoading } from "./Loading";
export { default as ModelLoader } from "./ModelLoader";

// Utility functions
export { default as animationHandler } from "./Animation";

// Types - export commonly used types for external consumption
export type { ModelRefs, MixerRefs, MousePosition } from "./Scene";
