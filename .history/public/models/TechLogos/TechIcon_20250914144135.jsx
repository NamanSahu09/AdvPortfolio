import React from 'react'
import { Environment, useGLTF } from '@react-three/drei'
const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <Environment preset="city" />
      <Float>
        
      </Float>
      </Canvas>
  )
}

export default TechIcon