import React from 'react'

const SquareComponent = ({ value, onClick }) => {
  return (
    <div>
      <button className='square' onClick={onClick}>{value}</button>
    </div>
  )
}

export default SquareComponent
