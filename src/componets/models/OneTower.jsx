import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/OneTower-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.node_id47.geometry} material={materials['69']} position={[0, -0.34, 0.25]} scale={0.03} />
    </group>
  )
}

useGLTF.preload('/OneTower-transformed.glb')
