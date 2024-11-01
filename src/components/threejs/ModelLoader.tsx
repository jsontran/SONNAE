import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface ModelLoaderProps {
  modelsRef: React.MutableRefObject<{ [key: string]: THREE.Object3D | null }>;
  mixersRef: React.MutableRefObject<{ [key: string]: THREE.AnimationMixer }>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  scene: THREE.Scene;
}

const modelsToLoad: {
  path: string;
  key: string;
  position: number[];
  scale: number[];
}[] = [
  {
    path: "./assets/3D/dancer.glb",
    key: "dancer",
    position: [-0.15, -1.6, 0],
    scale: [1, 1, 1],
  },
  {
    path: "./assets/3D/kirby.glb",
    key: "kirby",
    position: [3, -11.6, 0],
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

const ModelLoader: React.FC<ModelLoaderProps> = ({
  modelsRef,
  mixersRef,
  setIsLoading,
  scene,
}) => {
  const loader = new GLTFLoader();

  useEffect(() => {
    let loadedModelsCount = 0;
    const totalModelsCount = modelsToLoad.length;

    modelsToLoad.forEach(({ path, key, position, scale }) => {
      loader.load(
        path,
        (gltf) => {
          const model = gltf.scene;
          model.position.set(position[0], position[1], position[2]);
          model.scale.set(scale[0], scale[1], scale[2]);
          modelsRef.current[key] = model;

          if (gltf.animations.length) {
            const mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
            mixersRef.current[key] = mixer;
          }

          loadedModelsCount++;

          if (loadedModelsCount === totalModelsCount) {
            setIsLoading(false);
          }
        },
        undefined,
        (error) => console.error("Model loading error:", error)
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelsRef, mixersRef, setIsLoading]);
  return null;
};

export default ModelLoader;
