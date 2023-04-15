import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './market.scss'
import { AiTwotoneStar } from 'react-icons/ai'
import logo from '../../img/logotip-sheremetevo.png'
import { marketData } from '../Data/Data'

export const Market = () => {
	const [appState, setAppState] = useState([])
	const [category, setCategory] = useState('')
	const { text } = marketData
	const menu = [
		'All Products',
		'smartphones',
		'laptops',
		'fragrances',
		'skincare',
		'groceries',
		'home-decoration',
		'furniture',
		'tops',
		'womens-dresses',
		'womens-shoes',
	]
	useEffect(() => {
		const categoryProductUrl = `https://dummyjson.com/products/category/${category}`
		const allProdct = 'https://dummyjson.com/products'
		const url =
			category.length === 0 || category === 'All Products'
				? allProdct
				: categoryProductUrl
		axios.get(url, { params: { limit: 100 } }).then((resp) => {
			const allPersons = resp.data.products
			setAppState(allPersons)
		})
	}, [setAppState, category])
	return (
		<>
			<div className='header'>
				<img className='header__img' src={logo} alt='logoMarket' />
				<ul className='header__menu'>
					{menu.map((item) => (
						<li
							key={item}
							className='menu-item'
							onClick={() => setCategory(item)}>
							{item}
						</li>
					))}
				</ul>
			</div>
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
