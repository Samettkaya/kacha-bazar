import React from "react";
import DrawerCart from "../drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { shoppingCardAction } from "../../store/reducers/shoppingCardSlice";
function Cart() {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(shoppingCardAction(true));
  };
  const { cartTotalAmount, cartTotalQuantity } = useSelector(
    (state) => state.cart
  );
  return (
    <>
      <button
        onClick={() => handleOpen()}
        aria-label="Cart"
        className="absolute"
      >
        <div className="right-0 w-35 float-right fixed top-2/4 bottom-2/4 align-middle shadow-lg cursor-pointer z-30 hidden lg:block xl:block">
          <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-tl-lg p-2 text-gray-700">
            <span className="text-2xl mb-1 text-emerald-600">
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
                  d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                ></path>
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
                ></path>
              </svg>
            </span>
            <span className="px-2 text-sm  font-medium">
              {cartTotalQuantity} Items
            </span>
          </div>
          <div className="flex flex-col items-center justify-center bg-emerald-700 p-2 text-white text-base  font-medium rounded-bl-lg mx-auto">
            ${cartTotalAmount}
          </div>
        </div>
      </button>
    </>
  );
}

export default Cart;
