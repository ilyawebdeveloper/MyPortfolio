import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/tower-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.node_id144.geometry} material={materials['141']} position={[-0.02, -0.34, 0.2]} scale={0.03} />
    </group>
  )
}

useGLTF.preload('/tower-transformed.glb')
