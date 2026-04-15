import React from 'react'
import { useGLTF } from '@react-three/drei'

const PcModel = (props) => {
  // 1. Destructure 'scene' along with nodes and materials
  const { scene } = useGLTF('/pc-transformed.glb')

  return (
    // 2. Use <primitive /> to render the entire model at once
    <mesh>
      <primitive 
        object={scene} 
        scale={0.75} 
        position={[0, -3.25, -1.5]} 
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  )
}

export default PcModel;
useGLTF.preload('/pc-transformed.glb')