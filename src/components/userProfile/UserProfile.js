import React from 'react'
import {useDispatch} from 'react-redux'

import { isLoginAction } from '../../store/reducers/isOpenSlice'
const UserProfile = () => {
  const dispatch = useDispatch()
  
  return (
    <button onClick={()=>dispatch(isLoginAction(true))}
    className="!text-white hover:!text-white text-2xl font-bold"
   
  >
    <span>
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
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </span>
  </button>
  )
}

export default UserProfile