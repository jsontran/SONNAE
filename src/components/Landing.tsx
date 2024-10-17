import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeDModel = () => {
  const scrollPositionRef = useRef(0);
  const canvasRef = useRef<HTMLDivElement>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  const danceRef = useRef<THREE.Object3D | null>(null);
  const kirbyRef = useRef<THREE.Object3D | null>(null);
  const mimiRef = useRef<THREE.Object3D | null>(null);
  const pcRef = useRef<THREE.Object3D | null>(null);
  
  const clock = new THREE.Clock();
  const mouse = { x: 0, y: 0 };
  const turnAmplitude = 0.05;
  const turnSpeed = 1;
  const floatingAmplitude = 0.1;
  const floatingSpeed = 2;
  const kirbyInitialY = -11.6;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3.5);
    scene.add(ambientLight);

    const loader = new GLTFLoader();

    loader.load(
      "./assets/3D/scene.glb",
      (gltf) => {
        danceRef.current = gltf.scene;
        danceRef.current.rotation.set(0, -0.13, 0);
        danceRef.current.position.set(-0.15, -1.6, 0);
        danceRef.current.traverse((child: THREE.Object3D) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).geometry.computeVertexNormals();
          }
        });
        scene.add(danceRef.current);
        if (gltf.animations.length > 0) {
          mixerRef.current = new THREE.AnimationMixer(danceRef.current);
          const action = mixerRef.current.clipAction(gltf.animations[0]);
          action.play();
        }
      },
      undefined,
      (error) => console.error(error)
    );

    loader.load(
      "./assets/3D/kirby.glb",
      (gltf) => {
        kirbyRef.current = gltf.scene;
        kirbyRef.current.rotation.set(0, -0.13, 0);
        kirbyRef.current.position.set(3, kirbyInitialY, 0);
        kirbyRef.current.scale.set(1.1, 1.1, 1.1);
        kirbyRef.current.traverse((child: THREE.Object3D) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).geometry.computeVertexNormals();
          }
        });
        scene.add(kirbyRef.current);
      },
      undefined,
      (error) => console.error(error)
    );

    loader.load(
      "./assets/3D/mimi.glb",
      (gltf) => {
        mimiRef.current = gltf.scene;
        mimiRef.current.rotation.set(0, -0.13, 0);
        mimiRef.current.position.set(-2, -14.5, 0);
        mimiRef.current.scale.set(0.9, 0.9, 0.9);
        mimiRef.current.traverse((child: THREE.Object3D) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).geometry.computeVertexNormals();
          }
        });
        scene.add(mimiRef.current);
      },
      undefined,
      (error) => console.error(error)
    );

    loader.load(
      "./assets/3D/pc.glb",
      (gltf) => {
        pcRef.current = gltf.scene;
        pcRef.current.rotation.set(0, -0.13, 0);
        pcRef.current.position.set(-2.1, -7.3, 0);
        pcRef.current.scale.set(0.8, 0.8, 0.8);
        pcRef.current.traverse((child: THREE.Object3D) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).geometry.computeVertexNormals();
          }
        });
        scene.add(pcRef.current);
        if (gltf.animations.length > 0) {
          if (!mixerRef.current) {
            mixerRef.current = new THREE.AnimationMixer(pcRef.current);
          }
          const action = mixerRef.current.clipAction(gltf.animations[0]);
          action.play();
        }
      },
      undefined,
      (error) => console.error(error)
    );

    camera.position.z = 2.8;

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixerRef.current?.update(delta);
      if (kirbyRef.current) {
        const time = performance.now() * 0.001;
        kirbyRef.current.position.y =
          kirbyInitialY + Math.sin(time * floatingSpeed) * floatingAmplitude;
      }
      if (mimiRef.current) {
        const time = performance.now() * 0.001;
        mimiRef.current.rotation.y = Math.sin(time * turnSpeed) * turnAmplitude;
      }
      if (pcRef.current) {
        pcRef.current.rotation.y += 0.001;
      }
      if (danceRef.current) {
        danceRef.current.rotation.x =
          mouse.y * 0.15 + scrollPositionRef.current * 0.001;
        danceRef.current.rotation.y = mouse.x * 0.5 - 0.13;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleScroll = () => {
      scrollPositionRef.current = window.scrollY;
      if (danceRef.current) {
        camera.position.y = scrollPositionRef.current * -0.0033;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      canvasRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
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
  );
};

export default ThreeDModel;
