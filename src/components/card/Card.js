import React from "react";
import greenLettuce from "../../assets/img/Green-Lettuce.jpg";
function Card() {
  return (
    <div
      id="discount"
      className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
    >
      <div className="mb-10 flex justify-center">
        <div className="text-center w-full lg:w-2/5">
          <h2 className="text-xl lg:text-2xl mb-2 font-semibold">
            Popular Products for Daily Shopping
          </h2>
          <p className="text-base text-gray-600 leading-6">
            See all our popular products in this week. You can choose your daily
            needs products from this list and get some special offer with free
            shipping.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3 ">
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className="absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                  17% Off
                </span>
                <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold z-10 left-4 top-4">
                  Stock Out
                </span>
                <span
                  style={{
                    boxSizing: "borderBox",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                    maxWidth: "100%",
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
                      border: "0",
                      margin: "0",
                      padding: "0",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0",
                        margin: "0",
                        padding: "0",
                      }}
                    />
                  </span>
                  <img
                    src={greenLettuce}
                    decoding="async"
                    data-nimg="intrinsic"
                    className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
                  />
                </span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">
                    each
                  </span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Green Leaf Lettuce</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="product font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">
                      $14
                    </span>
                    <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                      $12
                    </del>
                  </div>
                  <button
                    arial-label="chart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    <span className="text-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
