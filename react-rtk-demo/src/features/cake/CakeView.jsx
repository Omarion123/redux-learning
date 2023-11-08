import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from "./cakeSlice";


export const CakeView = () => {
  const numOfcakes=useSelector((state)=>state.cake.numOfcakes)
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Number of cakes - {numOfcakes}</h1>
        {/* <h1>Number of cakes</h1> */}
        <button onClick={()=>dispatch(ordered())}>order cakes</button>
        <button onClick={()=>dispatch(restocked(5))}>restock cakes</button>
    </div>
  )
}
