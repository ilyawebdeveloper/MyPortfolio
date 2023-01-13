import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./market.scss"
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'


export const Market = () => {
   const [activePhoto, setActivePhoto] = useState(0);
	 const nextPhoto = () => {
			setActivePhoto(activePhoto + 1);
	 }
	 const lastPhoto = () => {
			setActivePhoto(activePhoto - 1)
		}
   const [appState, setAppState] = useState([]);
   useEffect(() => {
      const apiUrl = 'https://dummyjson.com/products';
      axios.get(apiUrl, {params: {limit: 30}}).then((resp) => {
         const allPersons = resp.data.products;
         setAppState(allPersons);
      });
   }, [setAppState]);
   console.log(appState);
   return (
			<div className='market'>
				{appState.map((product) => (
					<div key={product.id} className='market__cart'>
						<div className='market__cart-item' key={product.images}>
							<div className='cart-item-title'>{product.title}</div>
							<img
								className='cart-item-image'
								src={product.images[activePhoto]}
								alt='productItem'
							/>
							<div className='cart-item-coursel-wrapper'>
								<RiArrowLeftSLine onClick={lastPhoto} />
								<RiArrowRightSLine onClick={nextPhoto} />
							</div>
							<div className='cart-item-text'>{product.description}</div>
							<div className='cart-item-price'>
								Price:{product.price}
								<div className='cart-item-rating'>Rating:{product.rating}</div>
							</div>
						</div>
						{/* <div className='market__info'>
							<div className='market__info-price'>Price:{product.price}</div>
							<div className='market__info-raiting'>
								Rating:{product.rating}/5
							</div>
						</div> */}
					</div>
				))}
			</div>
		)
}
