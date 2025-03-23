import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import * as THREE from "three";
import ThreeJsLoading from "./Loading";
import ModelLoader from "./ModelLoader";
import animationHandler from "./Animation";

// Type definitions for better clarity and type safety
export interface MousePosition {
  x: number;
  y: number;
}

export interface ModelRefs {
  [key: string]: THREE.Object3D | null;
}

export interface MixerRefs {
  [key: string]: THREE.AnimationMixer;
}

/**
 * 3D Scene component that handles three.js rendering and animation
 */
const ThreeDScene: React.FC = () => {
  // Component state
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Refs for DOM elements and 3D objects
  const canvasRef = useRef<HTMLDivElement>(null);
  const modelsRef = useRef<ModelRefs>({});
  const mixersRef = useRef<MixerRefs>({});
  const scrollPositionRef = useRef<number>(0);
  const mousePositionRef = useRef<MousePosition>({ x: 0, y: 0 });

  /* eslint-disable react-hooks/exhaustive-deps */
  // Three.js setup - kept outside useEffect to be accessible in the animate callback
  const clock = new THREE.Clock();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  // Initialize lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 3.5);
  scene.add(ambientLight);

  // Animation loop with requestAnimationFrame
  const animate = useCallback(() => {
    requestAnimationFrame(animate);
    const delta = clock.getDelta() / 2;

    // Update all animation mixers
    Object.values(mixersRef.current).forEach((mixer) => mixer.update(delta));

    // Apply custom animations based on mouse and scroll position
    animationHandler(
      modelsRef.current,
      mousePositionRef.current,
      scrollPositionRef.current
    );

    // Render the scene
    renderer.render(scene, camera);
  }, [camera, scene, renderer]);
  /* eslint-enable react-hooks/exhaustive-deps */

  useEffect(() => {
    const canvas = canvasRef.current;

    // Event handlers
    const handleMouseMove = (event: MouseEvent) => {
      mousePositionRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    const handleScroll = () => {
      scrollPositionRef.current = window.scrollY;
      camera.position.y = scrollPositionRef.current * -0.0033;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Set up event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initialize renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (canvas) {
      canvas.appendChild(renderer.domElement);
    }

    // Set initial camera position
    camera.position.z = 2.8;

    // Add models to scene
    Object.values(modelsRef.current).forEach((model) => {
      if (model) {
        scene.add(model);
      }
    });

    // Start animation loop
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (canvas && renderer.domElement.parentNode === canvas) {
        canvas.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, [renderer, scene, camera, animate]);

  // Canvas styles for the 3D scene
  const canvasStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 0,
  };

  return (
    <>
      <ThreeJsLoading isLoading={isLoading} />
      <ModelLoader
        modelsRef={modelsRef}
        mixersRef={mixersRef}
        setIsLoading={setIsLoading}
        scene={scene}
      />
      <div ref={canvasRef} style={canvasStyle} />
    </>
  );
};

export default memo(ThreeDScene);
