// Pseudo
//Create a component that will return a button and that passes two props
//An onClick prop and a value prop

import React from 'react'

const SquareComponent = ({ value, onClick }) => {
  return (
    <div>
      <button className='square' onClick={onClick}>{value}</button>
    </div>
  )
}

export default SquareComponent
