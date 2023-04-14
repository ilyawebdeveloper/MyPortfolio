import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './market.scss'
import { AiTwotoneStar } from 'react-icons/ai'
import Header from './header/Header'
import { marketData } from '../Data/Data'

export const Market = () => {
	const [appState, setAppState] = useState([])
	const { text } = marketData
	useEffect(() => {
		const apiUrl = 'https://dummyjson.com/products'
		axios.get(apiUrl, { params: { limit: 50 } }).then((resp) => {
			const allPersons = resp.data.products
			setAppState(allPersons)
		})
	}, [setAppState])
	return (
		<>
			<Header />
			<div className='market'>
				{appState.map((product) => (
					<div key={product.id} className='market__cart'>
						<div className='market__cart-item' key={product.images}>
							<div className='cart-item-title'>{product.title}</div>
							<img
								className='cart-item-image'
								src={product.images[0]}
								alt='productItem'
							/>
							<div className='cart-item-text'>{product.description}</div>
							<div className='cart-item-price'>
								<button className='cart-item-button'>
									<span>{text.buy}</span>
								</button>
								<p>{product.price}$</p>
							</div>
							<div className='cart-item-rating'>
								{text.rating}: {product.rating}
								<AiTwotoneStar color='#f6cd00' fontSize={26} />
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
