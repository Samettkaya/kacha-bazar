import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addByIncrement, addToCart } from "../../store/reducers/cartSlice";
export default function Modal({ isOpen, closeModal, data }) {
  const [total, setTotal] = useState(1)
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addByIncrement({product: product,cartQuantity:total}));
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="inline-block overflow-y-auto h-full align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="flex flex-col lg:flex-row md:flex-row w-full max-w-4xl overflow-hidden">
                    <div className="flex-shrink-0 flex items-center justify-center h-auto cursor-pointer">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: " hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          maxWidth: " 100%",
                        }}
                      >
                        {" "}
                        <Link to={"/product/" + data.slug}>
                          <img
                            className=" w-full h-auto md:w-[420px] md:h-[420px] "
                            src={data.image}
                            alt={data.title}
                          />
                        </Link>
                      </span>
                    </div>
                    <div className="w-full flex flex-col p-5 md:p-8 text-left">
                      <div className="mb-2 md:mb-2.5 block -mt-1.5">
                        <h1 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold !text-black !no-underline  cursor-pointer">
                          <Link className="!no-underline  !text-black " to={"/product/" + data.href}>{data.title}</Link>
                        </h1>
                        {data.quantity === 0 ? (
                          <span className="bg-red-100 text-red-600 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold  mt-2">
                            Stock Out
                          </span>
                        ) : (
                          <span className="bg-emerald-100 text-emerald-600 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold mt-2">
                            In Stock
                          </span>
                        )}
                      </div>
                      <p className="text-sm leading-6 text-gray-500 md:leading-6">
                        {data.description}
                      </p>
                      <div className="flex items-center mt-4">
                        <div className=" product-price font-bold">
                          <span className="inline-block text-black text-2xl">
                            ${data.price}
                          </span>
                          {data.price === data.originalPrice ? (
                            ""
                          ) : (
                            <del className="text-lg font-normal text-gray-400 ml-1">
                              ${data.originalPrice}
                            </del>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-center mt-4">
                        <div className="flex items-center justify-center w-full space-s-3 sm:space-s-4 ">
                          <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                            <button
                              onClick={()=> setTotal(total-1)} 
                              disabled={ total<=1?true:false}
                      
                              className={total<=1?"flex items-center !cursor-default text-black justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500":"flex items-center !cursor-pointer text-black justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500"}
                            >
                              <span className=" text-base ">
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
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                              </span>
                            </button>
                            <p className="text-black font-semibold flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8 md:w-20 xl:w-24">
                              {total}
                            </p>
                            <button
                            onClick={()=> setTotal(total+1)} 
                              className={data.quantity===0?"  !cursor-default flex items-center justify-center h-full text-black flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500":"  !cursor-pointer flex items-center justify-center h-full text-black flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500"}
                              tabIndex="0"
                              disabled={data.quantity===0?true:false}
                            >
                              <span className=" text-base">
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
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <button onClick={()=>handleAddToCart(data)} disabled={data.quantity===0?true:false} className={data.quantity===0?" !cursor-default text-sm leading-4 inline-flex items-center  transition ease-in-out duration-300 font-semibold  text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none ml-4 text-white px-4  md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12": " cursor-pointer text-sm leading-4 inline-flex items-center  transition ease-in-out duration-300 font-semibold  text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none ml-4 text-white px-4  md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12"}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col mt-4">
                        <span className=" font-semibold py-1 text-sm d-block">
                          <span className="text-gray-700">Category:</span>{" "}
                          <span className="text-gray-500">{data.children}</span>
                        </span>
                        <div className="flex flex-row">
                          {data.tag.map((tag, index) => {
                            return(
                            <span key={index} className="bg-gray-50 mr-2 border-0 text-gray-600 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold  mt-2">
                              {tag}
                            </span>
                          )})} 
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div onClose={closeModal} className="absolute right-5 top-5">
                  <button
                    type="button"
                    className="inline-flex justify-center px-2 py-2 text-base font-medium text-red-500 bg-white border border-transparent rounded-full hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                    </svg>
                  </button>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
