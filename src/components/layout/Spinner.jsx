import React from 'react'
import spinner from './assets/spinner.gif'
function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img 
        className='mx-auto text-center'
        src={spinner} 
        alt="Loading.." 
      />
    </div>
  )
}

export default Spinner
