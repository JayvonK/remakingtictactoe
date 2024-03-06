//Psuedo
//Create a component that takes 2 props, an onclick and an array, and this component will return a div, row within the div, then three more divs within that row that returns an array that is sliced
//Before return statement we need to create a function that will return an array
//We will create an array, push a square component for each element in the array, then pass a a value prop, key prop, and onclick prop to for each square component. Then just return the array


import React from 'react'
import SquareComponent from '../Square/SquareComponent';

const BoardComponent = ({ onClick, squares }) => {
    const renderSquares = () => {
        const squareArr = [];

        squares.forEach((value, i) => {
            squareArr.push(
                <SquareComponent key={i} onClick={() => onClick(i)} value={value}/>
            )
        })
        return squareArr
    }


  return (
    <div className='board'>
      <div className='boardRow'>
        <div>{renderSquares().slice(0, 3)}</div>
        <div>{renderSquares().slice(3, 6)}</div>
        <div>{renderSquares().slice(6, 9)}</div>
      </div>
    </div>
  )
}

export default BoardComponent
