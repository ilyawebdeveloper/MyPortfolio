import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./market.scss"
import Cart from '../Cart/Cart';


export const Market = () => {
   const [appState, setAppState] = useState([]);
   useEffect(() => {
      const apiUrl = 'https://dummyjson.com/products';
      axios.get(apiUrl, {params: {limit: 10}}).then((resp) => {
         const allPersons = resp.data.products;
         setAppState(allPersons);
      });
   }, [setAppState]);
   console.log(appState);
   return (
      <div className='market'>
         {appState.map((product) => (
            <div key={product.id} className="market__cart">
               <Cart 
                  backgroundColor="#412C84"
                  title={product.title}
                  text={product.description}
                  image={product.images[0]}
                  link="/Market">
               </Cart>
               <div className='market__info'>
                  <div className='market__info-price'>Price:{product.price}</div>
                  <div className='market__info-raiting'>Rating:{product.rating}/5</div>
               </div>
            </div>
         )
         )}
      </div>
   )
}
