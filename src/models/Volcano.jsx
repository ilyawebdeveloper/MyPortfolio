import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/volcano-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.node_id33.geometry} material={materials['59']} position={[-0.02, -0.34, 0.24]} scale={0.22} />
    </group>
  )
}

useGLTF.preload('/volcano-transformed.glb')
