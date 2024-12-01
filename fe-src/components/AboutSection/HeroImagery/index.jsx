"use client";
import React, { Suspense, useState } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Plane, Sky, Sphere } from "@react-three/drei";

const RotatingModel = ({hovered, setHover, setClicked}) => {
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
            onPointerDown={() => setClicked(true)}
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
  return (
    <div className="
      absolute top-0 w-full h-full place-self-center lg:mt-0
      flex justify-center items-center
    ">
      <div className="child relative w-full lg:w-7/12 h-full aspect-square">
        <Canvas 
          ref={canvasRef} 
          className={"size-full object-contain " + `${hovered ? (clicked ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default' }`}
          shadows camera={{ position: [0, 0, 1.3]}}
        >
          <Suspense fallback={null}>
            <RotatingModel hovered={hovered} setHover={setHover} setClicked={setClicked}/>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default HeroImagery;
