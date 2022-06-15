import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { shoppingCardAction } from '../../store/reducers/shoppingCardSlice';
function Basket({className}) {
  const dispatch = useDispatch()
  const {cartTotalQuantity} = useSelector(state=>state.cart)
 
    const handleOpen = () => {

      dispatch(shoppingCardAction(true))

    };
  return (
    <button
    onClick={()=>{handleOpen()}}
    aria-label="Total"
    className={className}
  >
    <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
 {cartTotalQuantity}
    </span>
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 drop-shadow-xl"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  </button>
  )
}

export default Basket