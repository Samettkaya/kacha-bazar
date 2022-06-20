import React, { useEffect } from "react";
import Categories from "../components/categories/Categories";
import FastDeliveryCard from "../components/fastDeliveryCard/FastDeliveryCard";
import LatestDiscountCouponCode from "../components/latestDiscountCouponCode/LatestDiscountCouponCode";
import PopularProduct from "../components/popularProduct/PopularProduct";
import OrganicProductCard from "../components/organicProductCard/OrganicProductCard.js";
import Slider from "../components/slider/Slider";
import LatestDiscountedProduct from "../components/latestDiscountedProduct/LatestDiscountedProduct";
import Cart from "../components/cart/Cart";

function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="min-h-screen">
        <Cart/>  
        <div className="bg-white">
          <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
            <div className="flex w-full">
              <div className=" flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                <Slider />
              </div>
              <div className="w-full hidden lg:flex">
                <LatestDiscountCouponCode />
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
