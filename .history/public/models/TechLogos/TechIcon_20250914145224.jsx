import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, useGLTF } from '@react-three/drei'

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath)

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight/>


      <Environment preset="city" />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
        <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon
