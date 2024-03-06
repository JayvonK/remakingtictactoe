import React from 'react'
import SquareComponent from '../Square/SquareComponent';

const BoardComponent = ({ onClick, squares }) => {
    const renderSquares = () => {
        const squareArr = [];

        squares.forEach((value, i) => {
            squareArr.push(
                <SquareComponent key={i} onClick={onClick} value={value}/>
            )
        })

        return squareArr
    }


  return (
    <div className='board'>
      <div className='boardRow'>
        {renderSquares().slice(0, 3)}
        {renderSquares().slice(3, 6)}
        {renderSquares().slice(6, 9)}
      </div>
    </div>
  )
}

export default BoardComponent
