import React, { Suspense } from 'react'; // Don't forget this!
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload,Environment, ContactShadows } from '@react-three/drei';
import PcModel from './Pc'; 

const ComputersCanvas = () => {
  return (
    <Canvas 
      frameloop='always' 
      shadows 
      camera={{ position: [20, 3, 5], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* 1. Add these Light components */}
      <ambientLight intensity={1.5} /> 
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      {/* 2. Add an Environment for realistic reflections */}
      {/* <Environment preset="city" /> */}
      {/* <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5}
          enableZoom={false} 
          target={[0, -1.2, 0]}
      /> */}

      <Suspense fallback={null}>
        <OrbitControls 
          autoRotate                // Enable the automatic spin
          autoRotateSpeed={0.5}     // Set the spin speed
          enableZoom={false}        // Keep zoom disabled
          // maxPolarAngle={Math.PI / 2} 
          // minPolarAngle={Math.PI / 2} 
          target={[0, -1.2, 0]}     // Ensures rotation happens around the P
        />
        <PcModel /> 
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;