import React from 'react'
import './loader.scss'

function Loader() {
	return (
		<div className='loader'>
			<div className='wrap'>
				<div className='loading'>
					<div className='bounceball'></div>
					<div className='text'>NOW LOADING</div>
				</div>
			</div>
		</div>
	)
}

export default Loader
