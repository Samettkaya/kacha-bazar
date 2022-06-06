import React from 'react'
import { Link } from 'react-router-dom'

function OrganicProductCard() {
  return (
    <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-xl">
                    <span className="text-emerald-600 font-bold">100% Natural Quality </span>
                    Organic Product
                </h1>
                <p className="text-gray-500">
                See Our latest discounted products from here and get a special <Link className="ml-1 !no-underline !text-emerald-600" to="/#discount">discount product</Link> 
                </p>
            </div>
            <Link className="flex justify-center items-center text-sm font-serif font-medium px-6 h-9  !bg-emerald-500 text-center rounded-full !text-white !no-underline hover:!bg-emerald-700" to="#">Shop Now</Link>
        </div>
    </div>
  )
}

export default OrganicProductCard