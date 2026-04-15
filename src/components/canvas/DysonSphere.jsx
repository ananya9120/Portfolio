import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

// This is the model function you just generated
const SphereModel = () => {
  const { nodes, materials } = useGLTF('/sphere-transformed.glb');
  if (!nodes || !nodes.Icosphere001_Material001_0) return null;
  return (
    <group dispose={null}>
      <mesh 
        geometry={nodes.Icosphere001_Material001_0.geometry} 
        material={materials['Material.001']} 
        rotation={[-Math.PI / 2, 0, 0]} 
        scale={1.5} // Increased scale to make it fill the space
      />
      <mesh 
        geometry={nodes.BezierCircle_Material003_0.geometry} 
        material={materials['Material.003']} 
        rotation={[-Math.PI / 2, 0, 0]} 
        scale={2.5} 
      />
      <mesh 
        geometry={nodes.BezierCircle001_Material_0.geometry} 
        material={materials.Material} 
        rotation={[-Math.PI / 2, 0, 0]} 
        scale={2.5} 
      />
      <mesh 
        geometry={nodes.Sphere_Material002_0.geometry} 
        material={materials['Material.002']} 
        rotation={[-Math.PI / 2, 0, 0]} 
        scale={2.5} 
      />
    </group>
  );
};

const DysonSphereCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always' // Changed to always so we see the smooth rotation
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-8, 4, 10] }}
    >
      <Suspense fallback={null}>
        {/* Dyson Spheres usually have a glowing sun inside, so high intensity works well */}
        <ambientLight intensity={1.5} />
        <pointLight position={[0, 0, 0]} intensity={2} color="orange" /> 
        
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* Float makes it feel more "space-like" */}
        <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
           <SphereModel />
        </Float>
        
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default DysonSphereCanvas;