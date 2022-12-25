import React from 'react'
import "./modal.css"

export const Modal = (props) => {
  return (
    <div className='modal'>
      <div className='modal_text'>{props.text}</div>
    </div>
  )
}
