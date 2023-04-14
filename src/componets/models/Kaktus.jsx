import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/kaktus-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.node_id147.geometry} material={materials['193']} position={[0.08, -0.3, -0.21]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.07} />
    </group>
  )
}

useGLTF.preload('/kaktus-transformed.glb')
