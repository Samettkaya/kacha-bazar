import React, { useEffect } from "react";
import Categories from "../components/categories/Categories";
import FastDeliveryCard from "../components/fastDeliveryCard/FastDeliveryCard";
import LatestDiscountCouponCode from "../components/latestDiscountCouponCode/LatestDiscountCouponCode";
import PopularProduct from "../components/popularProduct/PopularProduct";
import OrganicProductCard from "../components/organicProductCard/OrganicProductCard.js";
import Slider from "../components/slider/Slider";
import LatestDiscountedProduct from "../components/latestDiscountedProduct/LatestDiscountedProduct";
import Cart from "../components/cart/Cart";
import { Coupon } from "../fakeData/coupon";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const twoCupon=Coupon.slice(0,2)
  return (
    <div className="bg-gray-50">
      <div className="min-h-screen">
        <Cart />
        <div className="bg-white">
          <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
            <div className="flex w-full">
              <div className=" flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                <Slider />
              </div>
              <div className="w-full hidden lg:flex">
                <div className="w-full group">
                  <div className="bg-gray-50 h-full border-2 border-orange-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow">
                    <div className="bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
                      <h3 className="text-base  font-normal ">
                        Latest Super Discount Active Coupon Code
                      </h3>
                    </div>
                    <div className="overflow-hidden">
                     {twoCupon.map((item ,index)=>(
                       <LatestDiscountCouponCode key={index}
                       
                       data={item}
                     />
                     ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <OrganicProductCard />
          </div>
        </div>

        <Categories />

        <PopularProduct />
        <FastDeliveryCard />
        <LatestDiscountedProduct />
      </div>
    </div>
  );
}

export default Home;
