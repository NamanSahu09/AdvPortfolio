import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, useGLTF } from '@react-three/drei'

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath)

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <Environment preset="city" />
      <Float speed={5.5} rotationIntensity={1} floatIntensity={2}>
        <primitive object={scene.scene} />
      </Float>
    </Canvas>
  )
}

export default TechIcon
