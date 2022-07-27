import React from 'react'
import { discountProducts } from '../../fakeData/Products'


import Card from '../card/Card'

function LatestDiscountedProduct() {
  return (
    <div
    id="discount"
    className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
  >
    <div className="mb-10 flex justify-center">
      <div className="text-center w-full lg:w-2/5">
        <h2 className="text-xl lg:text-2xl mb-2 text-black font-semibold">
          Latest Discounted Products
        </h2>
        <p className="text-base  text-gray-600 leading-6">
          See Our latest discounted products below. Choose your daily needs from
          here and get a special discount with free shipping.
        </p>
      </div>
    </div>
    <div className="flex">
        <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3 ">
        {discountProducts.map((data, index) => (
              <Card key={index} data={data} />
            ))}
        </div>
        </div>
    </div>
  </div>
  )
}

export default LatestDiscountedProduct