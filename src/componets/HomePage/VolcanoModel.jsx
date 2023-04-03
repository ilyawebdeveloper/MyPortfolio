import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'
import Volcano from '../../models/Volcano'

export default function VolcanoModel() {
	return (
		<Canvas
			gl={{ logarithmicDepthBuffer: true }}
			shadows
			camera={{ position: [1.5, 0, 1.5], fov: 25 }}>
			<Stage intensity={0.5} adjustCamera={false}>
				<Volcano />
			</Stage>
			<OrbitControls
				// autoRotate
				// autoRotateSpeed={1}
				enableZoom={false}
				enableRotate={true}
			/>
		</Canvas>
	)
}
