"use client";
import React, { Suspense } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Plane, Sky, Sphere } from "@react-three/drei";

const RotatingModel = () => {
  // TODO: rotate camera instead of object
  // TODO: add stopper when editing camera angle
  const gltf = useLoader(GLTFLoader, '/images/avatar.glb')
  gltf.scene.traverse(function (child) {
    child.castShadow = true
    child.receiveShadow = true
  })
  const myMesh: React.MutableRefObject<any> = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });



  return (
    <mesh ref={myMesh} castShadow receiveShadow>
      <primitive
        object={gltf.scene}
        position={[0, -1, 0]}
        castShadow
        receiveShadow
      />
    </mesh>
  );
}

const HeroImagery = () => {
  return (
    <div className="w-full col-span-6 place-self-center lg:mt-0">
      <div className="relative w-full aspect-square">
        <Canvas className="size-full object-contain" shadows camera={{ position: [-0.5, 1, 1.9]}}>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.3} />
            <directionalLight intensity={1.8} position={[5, 8, 3]} castShadow />
            <RotatingModel/>
            <Plane
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1, 0]}
              args={[10, 10]}
            >
              <shadowMaterial attach="material" opacity={0.3} />
            </Plane>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default HeroImagery;
