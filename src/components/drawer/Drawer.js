import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useSelector, useDispatch } from "react-redux";
import { shoppingCardAction } from "../../store/reducers/shoppingCardSlice";
import { decreaseCart, getTotals, incrementCart, removeFromCart } from "../../store/reducers/cartSlice";
function DrawerCart() {
  const open = useSelector((state) => state.shoppingCard.value);
  const cart = useSelector((state) => state.cart);
  const{cartTotalAmount}=useSelector((state) => state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return (
    <div>
      <Drawer
        size={"xs"}
        placement="right"
        open={open}
        onClose={() => dispatch(shoppingCardAction(false))}
      >
        <div className="drawer-mask"></div>
        <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer">
          <div className="w-full flex justify-between items-center relative px-5 py-4 border-b bg-indigo-50 border-gray-100">
            <h2 className="font-semibold  text-lg m-0 text-heading flex items-center">
              <span className="text-xl mr-2 ">
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
                    d="M320 264l-89.6 112-38.4-44.88"
                  ></path>
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                  ></path>
                </svg>
              </span>
              Shopping Cart
            </h2>
            <button
              onClick={() => dispatch(shoppingCardAction(false))}
              className="inline-flex text-base items-center justify-center text-gray-500 p-2 focus:outline-none transition-opacity group"
            >
              <svg
                className="group-hover:text-red-400"
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
              <span className="font-sens text-sm text-gray-500 group-hover:text-red-400 ml-1">
                Close
              </span>
            </button>
          </div>
          <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full">
            {}

            {cart.cartItems.length === 0 ? (
              <div className="flex flex-col h-full justify-center">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center w-20 h-20 rounded-full bg-emerald-100">
                    <span className="text-emerald-600 text-4xl block">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"></path>
                      </svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-700 text-lg pt-5">
                    Your cart is empty
                  </h3>
                  <p className="px-12 text-center text-sm text-gray-500 pt-2">
                    No items added in your cart. Please add product to your cart
                    list.
                  </p>
                </div>
              </div>
            ) : (
              cart.cartItems.map((data, index) => (
                <div
                  key={index}
                  className="group w-full h-auto flex justify-start  items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0"
                >
                  <div className="relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4">
                    <img
                      src={data.image}
                      width="40"
                      height="40"
                      alt={data.title}
                    />
                  </div>
                  <div className="flex flex-col w-full overflow-hidden">
                    <Link
                      className="truncate text-sm font-medium !no-underline !text-gray-700 text-heading line-clamp-1"
                      to="/product/strawberrie"
                    >
                      {data.title}
                    </Link>
                    <span className="text-xs text-gray-400 mb-1">
                      Item Price ${data.price}
                    </span>
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-sm md:text-base text-heading leading-5">
                        <span>${data.price*data.cartQuantity}</span>
                      </div>
                      <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
                        <button onClick={()=>dispatch(decreaseCart(data))} >
                          <span className="text-dark text-base">
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
                        <p className="text-sm font-semibold text-dark px-1">
                          {data.cartQuantity}
                        </p>
                        <button onClick={()=>dispatch(incrementCart(data))}>
                          <span className="text-dark text-base">
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
                      <button onClick={() =>dispatch(removeFromCart(data))} className="hover:text-red-600 text-red-400 text-lg cursor-pointer">
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
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mx-5 my-3">
            <span>
              <Link
                to={cart.cartItems.length===0?"/":"/checkout"}
                onClick={() => dispatch(shoppingCardAction(false))}
                className=" w-full py-3 px-3 rounded-lg !text-white !no-underline !bg-emerald-500 hover:!bg-emerald-600 flex items-center justify-between bg-heading text-sm sm:text-base  focus:outline-none transition duration-300"
              >
                <span className="align-middle font-medium ">
                  Proceed To Checkout
                </span>
                <span className="rounded-lg font-bold  py-2 px-3 bg-white text-emerald-600">
                  ${cartTotalAmount}
                </span>
              </Link>
            </span>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerCart;
