import React from "react";
import logo from "../../assets/icon/logo-light.svg";
import Basket from "../basket/Basket";
import Search from "../search/Search";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  DocumentTextIcon,
  GiftIcon,
  InformationCircleIcon,
  PhoneIncomingIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  ShoppingBagIcon,
  SupportIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {  Link } from "react-router-dom";

import category1 from "../../assets/icon/category-1.png";
import category2 from "../../assets/icon/category-2.png";
import category3 from "../../assets/icon/category-3.png";
import category4 from "../../assets/icon/category-4.png";
import category5 from "../../assets/icon/category-5.png";
import category6 from "../../assets/icon/category-6.png";
import category7 from "../../assets/icon/category-7.png";
import category8 from "../../assets/icon/category-8.png";
import category9 from "../../assets/icon/category-9.png";
import category10 from "../../assets/icon/category-10.png";
import SubMenu from "../subMenu";
import { CategoriesData } from "../../fakeData/CategoriesData";



const resources = [
  {
    name: "Offer",
    href: "#",
    icon: GiftIcon,
  },
  {
    name: "Checkout",
    href: "#",
    icon: ShoppingBagIcon,
  },
  {
    name: "FAQ",
    href: "#",
    icon: ShieldExclamationIcon,
  },
  {
    name: "About Us",
    href: "#",
    icon: UserGroupIcon,
  },
  {
    name: "Contact Us",
    href: "#",
    icon: PhoneIncomingIcon,
  },
  {
    name: "Privacy Policy",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Terms & Conditions",
    href: "#",
    icon: DocumentTextIcon,
  },
  {
    name: "404",
    href: "#",
    icon: InformationCircleIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navigation() {
  return (
    <div className="sticky bg-emerald-500 top-0 z-20">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
        <div className="h-16 top-bar lg:h-auto flex items-center justify-between py-4 mx-auto">
          <Link to="/" className="!no-underline mr-3 hidden xl:mr-12 md:hidden lg:block " >
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: " 0px",
                position: "relative",
                maxWidth: "100%",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0px",
                  margin: "0px",
                  padding: " 0px",
                  maxWidth: "100%",
                  alignItems: "center",
                }}
              >
                <img
                  className="flex items-center w-[110px] h-10 "
                  src={logo}
                  srcSet={`${logo} 1 ,${logo} 2 ,${logo} 3 `}
                />
              </span>
            </span>
          </Link>
          <Search />
          <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              className=" pr-5 text-white text-2xl font-bold"
              aria-label="Alert"
            >
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
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
            <Basket />
            <button
              className="pl-5 text-white text-2xl font-bold"
              aria-label="Login"
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
          </div>
        </div>
      </div>
      <div className="hidden lg:block xl:block bg-white border-b">
        <div className=" items-center justify-between flex mx-auto max-w-screen-2xl px-3 sm:px-10 h-12">
          <div className="inline-flex">
            <Popover className="relative">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center   md:justify-start md:space-x-10">
                  <Popover.Group
                    as="nav"
                    className=" md:flex space-x-10 items-center"
                  >
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              // open ? "text-gray-900" : "text-gray-500",
                              "group inline-flex items-center py-2  text-sm focus:outline-none text-black  hover:text-emerald-600 "
                            )}
                          >
                            <span className="text-sm ">Categories</span>
                            <ChevronDownIcon
                              className={classNames(
                                "ml-1 h-3 w-3 group-hover:text-emerald-600"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs c-h-65vh bg-white  ">
                              <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll scrollbar flex-grow w-full h-[400px]">
                                <div className="flex flex-col w-full h-full bg-white cursor-pointer scrollbar-hide">
                                  <div className="w-full max-h-full">
                                    <div className="relative grid gap-2 p-6">
                                      {CategoriesData.map((category , index) => (

                                        <span
                                          key={index}
                                         
                                          className=" p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                        >
                                          <span
                                            style={{
                                              boxSizing: " border-box",
                                              display: "inline-block",
                                              overflow: "hidden",
                                              width: "initial",
                                              height: "initial",
                                              background: "none",
                                              opacity: "1",
                                              border: "0px",
                                              margin: "0px",
                                              padding: " 0px",
                                              position: "relative",
                                              maxWidth: "100%",
                                            }}
                                          >
                                            <img
                                              src={category.icon}
                                              style={{
                                                inset: " 0px",
                                                boxSizing: " border-box",
                                                padding: "0px",
                                                border: " none",
                                                margin: "auto",
                                                display: "block",
                                                width: "16px",
                                                height: "16px",
                                                minWidth: "100%",
                                                maxWidth: "100%",
                                                minHeight: "100%",
                                                maxHeight: "100%",
                                              }}
                                            />
                                          </span>
                                          <div
                                            className=" ml-3 inline-flex items-center justify-between w-full hover:text-emerald-600
                                          "
                                          >
                                            {category.name}
                                            <span className="transition duration-700 ease-in-out inline loading-none items-end text-gray-400">
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
                                                  strokeWidth="48"
                                                  d="M184 112l144 144-144 144"
                                                ></path>
                                              </svg>
                                            </span>
                                          </div>
                                 
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <Link className="text-sm !text-black !no-underline hover:!text-emerald-600"to="/about-us">About Us</Link>
                    <Link className="text-sm !text-black !no-underline hover:!text-emerald-600"to="/contact-us"> Contact Us</Link>
                  
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              // open ? "text-gray-900" : "text-gray-500",
                              "group bg-white rounded-md inline-flex items-center text-sm py-2 text-black hover:text-emerald-600 "
                            )}
                          >
                            <span className="text-sm ">Pages</span>
                            <ChevronDownIcon
                              className={classNames(
                                "ml-1 h-3 w-3 group-hover:text-emerald-600 "
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs bg-white">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar w-full h-full">
                                <div className="relative grid gap-2  px-6 py-6 ">
                                  {resources.map((item , index) => (
                                  <span key={index} className="p-2 flex  items-center rounded-md hover:!bg-gray-50 w-full hover:!text-emerald-600">
                                       <item.icon
                                        className="flex-shrink-0 h-4 w-4 "
                                        aria-hidden="true"
                                      />
                                     
                                        <Link to={item.href} className="!text-black inline-flex items-center justify-between ml-2 text-sm font-medium w-full !no-underline hover:!text-emerald-600">
                                          {item.name}
                                        </Link>
                                       
                                    
                                  </span>
                                   
                                    
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <Link
                      className="relative inline-flex items-center h-6 !bg-red-100 font-serif ml-4 py-0 px-2 rounded text-sm font-medium !no-underline !text-red-500 hover:!text-emerald-600"
                      to="/offer"
                    >
                      Offers
                      <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </div>
                    </Link>
                  </Popover.Group>
                </div>
              </div>
            </Popover>
          </div>
          <div className="flex">
            <Link to="/privacy-policy" className=" mx-4 py-2 text-sm cursor-pointer !no-underline !text-black hover:text-emerald-600">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className=" mx-4 py-2 text-sm cursor-pointer !no-underline !text-black hover:text-emerald-600">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
