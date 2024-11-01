import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import LoadingScreen from "./Loading";
import ModelLoader from "./ModelLoader";
import AnimationHandler from "./Animation";

const ThreeDModel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef<HTMLDivElement>(null);
  const modelsRef = useRef<{ [key: string]: THREE.Object3D | null }>({});
  const mixersRef = useRef<{ [key: string]: THREE.AnimationMixer }>({});
  const scrollPositionRef = useRef(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  /* eslint-disable react-hooks/exhaustive-deps */
  const clock = new THREE.Clock();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  const ambientLight = new THREE.AmbientLight(0xffffff, 3.5);
  scene.add(ambientLight);

  const animate = useCallback(() => {
    requestAnimationFrame(animate);
    const delta = clock.getDelta() / 2;
    Object.values(mixersRef.current).forEach((mixer) => mixer.update(delta));
    AnimationHandler(
      modelsRef.current,
      mousePositionRef.current,
      scrollPositionRef.current
    );
    renderer.render(scene, camera);
  }, [camera, scene, renderer]);
  /* eslint-enable react-hooks/exhaustive-deps */
  useEffect(() => {
    const canvas = canvasRef.current;

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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas?.appendChild(renderer.domElement);
    camera.position.z = 2.8;

    Object.values(modelsRef.current).forEach((model: any) => scene.add(model));
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      canvas?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [renderer, scene, camera, animate]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <ModelLoader
        modelsRef={modelsRef}
        mixersRef={mixersRef}
        setIsLoading={setIsLoading}
        scene={scene}
      />
      <div
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
        }}
      />
    </>
  );
};

export default ThreeDModel;
