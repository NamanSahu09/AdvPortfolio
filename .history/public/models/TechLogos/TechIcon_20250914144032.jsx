import React from 'react'
import { useGLTF } from '@react-three/drei'
const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  return (
    <Canvas>
      <ambientLight
      </Canvas>
  )
}

export default TechIcon