import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, useGLTF, OrbitControls } from '@react-three/drei'
import * as Three from 'three'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath)

  useEffect(() => {
    if (model.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new Three.MeshStandardMaterial({ color: 'white' }) // Change to desired color
        }
      })
    }
  }, [scene, model.name])

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Environment */}
      <Environment preset="city" />

      {/* Controls */}
      <OrbitControls enableZoom={false} enablePan={false} />

      {/* Floating Model */}
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon
