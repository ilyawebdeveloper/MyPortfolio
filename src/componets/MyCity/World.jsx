import React from 'react'
import TowerModel from '../HomePage/TowerModel'
import BigCityModal from '../HomePage/BigCityModel'
import OneTowerModel from '../HomePage/OneTowerModel'
import KaktusModel from '../HomePage/KaktusModel'
import VolcanoModel from '../HomePage/VolcanoModel'
import './world.scss'

function World() {
	return (
		<div className='wrapper_models'>
			<div className='small-tower'>
				<OneTowerModel />
			</div>
			<div className='big-tower'>
				<TowerModel />
			</div>
			<div className='kaktus'>
				<KaktusModel />
			</div>
			<div className='kaktus-too'>
				<KaktusModel />
			</div>
			<div className='vulcano'>
				<VolcanoModel />
			</div>
			<div className='flying-city'>
				<BigCityModal />
			</div>
		</div>
	)
}

export default World
