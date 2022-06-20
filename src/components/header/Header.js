import React from "react";
import{ Link} from "react-router-dom"
import{ useDispatch} from "react-redux"
import { isLoginAction } from "../../store/reducers/isOpenSlice";
function Header() {
  const dispatch = useDispatch()
  
  return (
    <div className=" hidden lg:block bg-gray-100">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
        <div className="flex justify-between text-gray-700 text-xs py-2 font-sans font-medium border-b  ">
          <span className="flex  items-center ">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            We are available 24/7, Need help? Call Us:
            <a
              className="font-bold !no-underline !text-emerald-500 ml-1"
              href="tel:+01234560352"
            >
              +01234560352
            </a>
          </span>
          <div className="flex items-center lg:text-right ">
            <Link to="about-us" className=" !text-black !no-underline font-medium cursor-pointer hover:!text-emerald-600">
              About Us
            </Link>
            <span className="mx-2">|</span>
            <Link  to="contact-us" className="!no-underline !text-black font-medium cursor-pointer hover:!text-emerald-600">Contact Us</Link>
            <span className="mx-2">|</span>
            <Link to="/user/dashboard" className="!no-underline !text-black font-medium cursor-pointer hover:!text-emerald-600">My account</Link>
            <span className="mx-2">|</span>
            <button onClick={()=>dispatch(isLoginAction(true))} className="!no-underline !text-black flex items-center font-medium cursor-pointer hover:!text-emerald-600 ">
              <span className="mr-1">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
