import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/bigCity-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.node_id61.geometry} material={materials['79']} position={[-0.01, -0.34, 0.27]} scale={0.03} />
    </group>
  )
}

useGLTF.preload('/bigCity-transformed.glb')
