"use client";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Plane, Sky, Sphere } from "@react-three/drei";

const RotatingModel = ({hovered, clicked, setHover, setClicked, setMoved}) => {
  const gltf = useLoader(GLTFLoader, '/images/avatar.glb')

  gltf.scene.traverse(function (child) {
    child.castShadow = true
    child.receiveShadow = true
  })
  const myMesh = React.useRef();

  const startTime = useRef(null);
  const [zoomMultiplier, zetZoomMultiplier] = useState(1)
  const [rotationSpeedMultiplier, setRotationSpeedMultiplier] = useState(1)
  const [initialRotationActive, setInitialRotationActive] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialRotationActive(false);
    }, 750); // 750ms

    return () => clearTimeout(timer); // Clear timeout on unmount or re-render
  }, []);

  useFrame((state, delta) => {
    let targetMultiplier = 1;
    let targetZoom = 1;

    if (clicked) {
      targetMultiplier = 0;
      targetZoom = 1.2;
    } else if (initialRotationActive) {
      const elapsedTime = Date.now() - startTime.current;
      const progress = Math.min(elapsedTime / 750, 1); // Progress from 0 to 1 over 750ms
      targetMultiplier = 1 + (36 * progress); // Linearly interpolate from 1 to 37
      targetZoom = 1 + (1 - progress/2); // Linearly interpolate from 2 to 1.5
    } else if (hovered) {
      targetMultiplier = 2;
      targetZoom = 1.2;
    }

    setRotationSpeedMultiplier(prevMultiplier => {
      const smoothMultiplier = prevMultiplier + (targetMultiplier - prevMultiplier) * 0.1; // Smooth transition
      return smoothMultiplier
    })
    zetZoomMultiplier(prevZoom => prevZoom + (targetZoom - prevZoom) * 0.05)

    myMesh.current.rotation.y += delta * rotationSpeedMultiplier;
    myMesh.current.scale.set(zoomMultiplier, zoomMultiplier, zoomMultiplier)
  });

  const handleClick = () => {
    setClicked(true)
    if (hovered) {
      setMoved(true)
    }
  }

  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1.8} position={[5, 8, 3]} castShadow />
        <mesh ref={myMesh} castShadow receiveShadow>
          <primitive
            object={gltf.scene}
            position={[0, -1, 0]}
            castShadow
            receiveShadow
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onPointerDown={handleClick}
            onPointerUp={() => setClicked(false)}
          />
        </mesh>
        <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[10, 10]}
      >
        <shadowMaterial attach="material" opacity={0.3} />
      </Plane>
    </>
    
  );
}

const HeroImagery = () => {
  const canvasRef = React.useRef();
  const [hovered, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [moved, setMoved] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 });  

  const handleMouseMove = (e) => {  
    setPosition({ x: e.clientX, y: e.clientY});  
  };

  return (
    <div onMouseMove={handleMouseMove} className="
      relative
      w-full h-full place-self-center lg:mt-0
      flex justify-center items-center
    ">
      <div className="child relative w-full h-full aspect-square">
        <Canvas 
          ref={canvasRef} 
          
          className={"size-full object-contain " + `${hovered ? (clicked ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default' }`}
          shadows camera={{ position: [-0.5, -0.5, 1.3]}}
        >
          <Suspense fallback={null}>
            <RotatingModel hovered={hovered} clicked={clicked} setHover={setHover} setClicked={setClicked} setMoved={setMoved}/>
          </Suspense>
        </Canvas>
      </div>
      {hovered && !moved && (  
        <div style={{ position: 'absolute', top: position.y, left: position.x }} className="hidden lg:visible animate-pulse px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700">  
            [ProTip] Try to move me around?
        </div>  
      )}  
    </div>
  );
};

export default HeroImagery;
