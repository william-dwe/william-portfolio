"use client";
import React, { Suspense, useState } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Plane, Sky, Sphere } from "@react-three/drei";

const RotatingModel = ({hovered, setHover, setClicked, setMoved}) => {
  const gltf = useLoader(GLTFLoader, '/images/avatar.glb')

  gltf.scene.traverse(function (child) {
    child.castShadow = true
    child.receiveShadow = true
  })
  const myMesh = React.useRef();

  useFrame((state, delta) => {
    if (hovered) {
      myMesh.current.rotation.y += delta/Math.PI;
    }
    else {
      myMesh.current.rotation.y += delta;
    }
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
            <RotatingModel hovered={hovered} setHover={setHover} setClicked={setClicked} setMoved={setMoved}/>
          </Suspense>
        </Canvas>
      </div>
      {hovered && !moved && (  
        <div style={{ position: 'absolute', top: position.y, left: position.x }} className="animate-pulse px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700">  
            [ProTip] Try to move me around?
        </div>  
      )}  
    </div>
  );
};

export default HeroImagery;
