import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment,decrement } from '../redusers/Counter'

function CounterForm() {

    let selector = useSelector((state) =>state.CounterReducer.count)
    let dispatch = useDispatch()

  return (
    <>
    <h1>{selector}</h1>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>    
    </>
  )
}

export default CounterForm