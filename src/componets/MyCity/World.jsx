import React, { Suspense } from 'react'
import TowerModel from '../HomePage/modelsWrapper/TowerModel'
import BigCityModal from '../HomePage/modelsWrapper/BigCityModel'
import OneTowerModel from '../HomePage/modelsWrapper/OneTowerModel'
import KaktusModel from '../HomePage/modelsWrapper/KaktusModel'
import VolcanoModel from '../HomePage/modelsWrapper/VolcanoModel'
// import ChudikModel from '../HomePage/modelsWrapper/Chudik'
import derevnya from '../../img/derevnya.jpg'
import './world.scss'

function World() {
	return (
		<Suspense fallback={'loading...'}>
			<div className='wrapper_models'>
				<img className='wrapper_models__image' src={derevnya} alt='derevnya' />
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
				{/* <div className='chudik'>
					<ChudikModel />
				</div> */}
			</div>
		</Suspense>
	)
}

export default World
