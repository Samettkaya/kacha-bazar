import React from "react";
import Card from "../card/Card";

function PopularProduct() {
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
      <Card />
    </div>
  );
}

export default PopularProduct;
