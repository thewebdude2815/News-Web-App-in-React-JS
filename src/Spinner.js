import React, { Component } from 'react'
import spinner from './spinner.gif';
const Spinner = () => {
 
    return (
      <div className='text-center'>
          <img src={spinner} alt={spinner} height={60}/>
      </div>
  )
  
}

export default Spinner