//Pseudo
//Create a function that returns an object holding 5 elements, an array, a number, a fuction that updates history, another function that resets history, and a function that is used to change the state of the number
//We initialize the state of the array as an array with the length of 9 and that's filled with null
//We initialize the state of the number as 0
//We need the update history function to take in a parameter, then set the array we created to that parameter, and also set the number we created to the parameter's length minus 1
//We need the reset history function to reset the array and integer to it's original values

import React, { useState } from 'react'

const useGameHistory = () => {
    const [history, setHistory] = useState(Array(9).fill(null));

    const [stepNumber, setStepNumber] = useState(0);

    const updateHistory = (newHistory) => {
        setHistory(newHistory);
        setStepNumber(newHistory.length - 1);
    }

    const resetHistory = () => {
        setHistory(Array(9).fill(null));
        setStepNumber(0);
    }

  return {
    history,
    stepNumber,
    setStepNumber,
    resetHistory,
    updateHistory
  }
}

export default useGameHistory

