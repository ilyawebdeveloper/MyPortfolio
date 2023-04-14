import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chudik-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.node_id214.geometry} material={materials['271']} position={[0.11, -0.3, -0.26]} scale={0.08} />
    </group>
  )
}

useGLTF.preload('/chudik-transformed.glb')
