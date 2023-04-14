import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'
import Tower from '../../models/Tower'

export default function TowerModel() {
	return (
		<Canvas
			gl={{ logarithmicDepthBuffer: true }}
			shadows
			camera={{ position: [1.5, 0, 1.5], fov: 25 }}>
			<Stage intensity={0.5} adjustCamera={false}>
				<Tower />
			</Stage>
			<OrbitControls
				autoRotate
				autoRotateSpeed={0.7}
				enableZoom={false}
				enableRotate={true}
			/>
		</Canvas>
	)
}
