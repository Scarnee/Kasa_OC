import React from 'react'
import './title.css'

function Title({title, location}) {
  return (
    <div className='mainTitle'>
        <p className='title'>{title}</p>
        <p className='location'>{location}</p>
    </div>
  )
}

export default Title