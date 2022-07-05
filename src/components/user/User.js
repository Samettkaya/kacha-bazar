import React from "react";
import { Link, Outlet } from "react-router-dom";
import { UserMenu } from "../../fakeData/UserMenu";


const User = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="py-10 lg:py-12 flex flex-col lg:flex-row w-full">
          <div className="flex-shrink-0 w-full lg:w-80 mr-7 lg:mr-10 xl:mr-10">
            <div className="bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32">
            
         {UserMenu.map((data,index)=>(
            <span key={index} className="group p-2 my-2 flex text-black items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
              {data.icon}
            <Link to={data.path}
              className=" text-black hover:no-underline focus:text-inherit focus:no-underline inline-flex items-center justify-between ml-2 text-sm font-medium w-full  group-hover:text-emerald-600"
            >
            {data.title}
            </Link>
          </span>
         ))}
            
              <span className="p-2 flex  items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                <span className="mr-2 text-black">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M336 112a80 80 0 00-160 0v96"
                    ></path>
                    <rect
                      width="320"
                      height="272"
                      x="96"
                      y="208"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      rx="48"
                      ry="48"
                    ></rect>
                  </svg>
                </span>
                <button className="inline-flex text-black items-center justify-between text-sm font-medium w-full hover:text-emerald-600">
                  Logout
                </button>
              </span>
            </div>
          </div>
          <div className="w-full bg-white mt-4 lg:mt-0 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
