import React, { useRef } from 'react'
import { useTrail, animated } from '@react-spring/web'
import { FcCursor } from 'react-icons/fc'
import './titleAnimated.scss'

function TitleAnimated({itemsTitle, id}) {
	const items = itemsTitle;
	const [trail, api] = useTrail(items.length, () => ({
		rotateX: 0,
	}))
	const isFlipped = useRef(false)

	const handleClick = () => {
		if (isFlipped.current) {
			api.start({
				rotateX: 0,
			})
			isFlipped.current = false
		} else {
			api.start({
				rotateX: 180,
			})
			isFlipped.current = true
		}
	}
	return (
		<div className='wrapper_title' id={id} onClick={handleClick}>
			{trail.map(({ rotateX }, i) => (
				<div className='wrapper_title__box' key={i}>
					<animated.div
						key={items[i]}
						className='wrapper_title__frontBox'
						style={{
							transform: rotateX.to(
								(val) => `perspective(600px) rotateX(${val}deg)`
							),
							transformStyle: 'preserve-3d',
						}}>
						<FcCursor color='#B36A32' />
					</animated.div>
					<animated.div
						className='wrapper_title__backBox'
						style={{
							transform: rotateX.to(
								(val) => `perspective(600px) rotateX(${180 - val}deg)`
							),
							transformStyle: 'preserve-3d',
						}}>
						{items[i]}
					</animated.div>
				</div>
			))}
		</div>
	)
}

export default TitleAnimated
