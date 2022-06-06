import React from "react";
import { Link } from "react-router-dom";
import Basket from "../basket/Basket";
import UserProfile from "../userProfile/UserProfile";
import {  useDispatch } from 'react-redux'
import { sidebarAction } from "../../store/reducers/sidebarSlice";
const FooterHeader = () => {

  const dispatch = useDispatch()


     


  return (
    <footer className="lg:hidden fixed z-30 bottom-0 bg-emerald-500 flex items-center justify-between w-full h-16 px-3 sm:px-10">
      <button onClick={()=>{ dispatch(sidebarAction(true))}} className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none">
        <span className="text-xl text-white">
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
            <line x1="17" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="17" y1="18" x2="3" y2="18"></line>
          </svg>
        </span>
      </button>
      <Link to="/" className="text-xl !text-white">
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
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </Link>
      <Basket className=" pr-5 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg"/>
      <UserProfile />
    </footer>
  );
};

export default FooterHeader;
