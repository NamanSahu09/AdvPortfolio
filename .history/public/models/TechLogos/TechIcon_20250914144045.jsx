import React from 'react'
import { useGLTF } from '@react-three/drei'
const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      
      </Canvas>
  )
}

export default TechIcon