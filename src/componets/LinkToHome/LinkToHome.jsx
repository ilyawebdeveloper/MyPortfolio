import React from 'react'
import { FiChevronsLeft } from 'react-icons/fi'
import './linkToHome.scss'
import { Link } from 'react-router-dom'

const LinkToHome = () => {
	return (
		<Link to={'/'}>
			<div className='link_to_home'>
				<FiChevronsLeft />
			</div>
		</Link>
	)
}

export default LinkToHome
