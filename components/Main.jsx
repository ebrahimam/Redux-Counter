import React from 'react'
import {increment,decrement,reset} from "./action"
import {store} from "./store"
import { useDispatch, useSelector } from 'react-redux'
export default function Main() {
    const dispatch =useDispatch()
    const count =useSelector((state)=>state.counter)
  return (
    <div className='box'>
   <span className='count'>{count}
    </span>
    <div className="buttons">
       <button className="btns" onClick={()=>{dispatch(increment())}}>+</button>
       <button className="btns" onClick={()=>{dispatch(reset())}}>Reset</button>
    <button className="btns" onClick={()=>{store.dispatch(decrement())}}>-
    </button>
    
    </div>
   
    </div>
  )
}
