import React, { useEffect, memo } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Clear interfaces for better type safety
interface ModelDefinition {
  path: string;
  key: string;
  position: [number, number, number];
  scale: [number, number, number];
}

interface ModelCollection {
  [key: string]: THREE.Object3D | null;
}

interface MixerCollection {
  [key: string]: THREE.AnimationMixer;
}

interface ModelLoaderProps {
  modelsRef: React.MutableRefObject<ModelCollection>;
  mixersRef: React.MutableRefObject<MixerCollection>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  scene: THREE.Scene;
}

// Models configuration array for easy modification and extension
const modelsConfig: ModelDefinition[] = [
  {
    path: "./assets/3D/dancer.glb",
    key: "dancer",
    position: [-0.15, -1.6, 0],
    scale: [1, 1, 1],
  },
  {
    path: "./assets/3D/kirby.glb",
    key: "kirby",
    position: [3, -10, 0],
    scale: [1.1, 1.1, 1.1],
  },
  {
    path: "./assets/3D/mimi.glb",
    key: "mimi",
    position: [-2, -14.5, 0],
    scale: [0.9, 0.9, 0.9],
  },
  {
    path: "./assets/3D/pc.glb",
    key: "computer",
    position: [-2.1, -7.3, 0],
    scale: [0.8, 0.8, 0.8],
  },
];

/**
 * Component responsible for loading 3D models into the scene
 * Manages loading states and animations for models
 */
const ModelLoader: React.FC<ModelLoaderProps> = ({
  modelsRef,
  mixersRef,
  setIsLoading,
  scene,
}) => {
  useEffect(() => {
    let loadedModelsCount = 0;
    const totalModelsCount = modelsConfig.length;
    const loader = new GLTFLoader();

    // Load progress handler to track model loading
    const onProgress = () => {
      loadedModelsCount++;
      if (loadedModelsCount === totalModelsCount) {
        setIsLoading(false);
      }
    };

    // Error handler for model loading failures
    const onError = (error: unknown) => {
      console.error("Model loading error:", error);
      // Still increment count to prevent hanging on error
      onProgress();
    };

    // Load each model defined in the config
    modelsConfig.forEach(({ path, key, position, scale }) => {
      loader.load(
        path,
        (gltf) => {
          const model = gltf.scene;

          // Position and scale the model
          model.position.set(position[0], position[1], position[2]);
          model.scale.set(scale[0], scale[1], scale[2]);

          // Store the model in the reference collection
          modelsRef.current[key] = model;

          // Setup animations if present
          if (gltf.animations.length) {
            const mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
            mixersRef.current[key] = mixer;
          }

          onProgress();
        },
        undefined,
        onError
      );
    });

    // No cleanup needed as models are maintained for the app's lifetime
  }, [modelsRef, mixersRef, setIsLoading]);

  // Render nothing - this component only handles loading
  return null;
};

export default memo(ModelLoader);
