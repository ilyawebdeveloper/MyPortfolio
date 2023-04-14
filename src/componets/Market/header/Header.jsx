import React from 'react'
import './header.scss'
import logo from '../../../img/logotip-sheremetevo.png'

function Header() {
  const menu = [
		'Smartphones',
		'Laptops',
		'Fragrances',
		'Skincare',
		'Groceries',
		'Home-decoration',
	]
  return (
		<div className='header'>
			<img className='header__img' src={logo} alt='logoMarket' />
			<ul className='header__menu'>
				{menu.map((item) => (
					<li key={item} className='menu-item'>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Header