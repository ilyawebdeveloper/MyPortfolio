import React from 'react'
import { Link } from 'react-router-dom'
import "./Cart.css"

export default function Cart(props) {
  return (
		<Link to={props.link} className='link'>
			<div className='cart'>
				<div className='cart_title'>{props.title}</div>
				<div className='cart_text'>{props.text}</div>
				<img className='cart_image' alt='photo_Project' src={props.image} />
			</div>
		</Link>
	)
}
