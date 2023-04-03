import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'
import BigCity from '../../models/BigCity'

export default function TowerModel() {
	return (
		<Canvas
			gl={{ logarithmicDepthBuffer: true }}
			shadows
			camera={{ position: [1.5, 0, 0], fov: 25 }}>
			<Stage intensity={0.5} adjustCamera={false}>
				<BigCity />
			</Stage>
			<OrbitControls
				autoRotate
				autoRotateSpeed={1}
				enableZoom={false}
				enableRotate={false}
			/>
		</Canvas>
	)
}
