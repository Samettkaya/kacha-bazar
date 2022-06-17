import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getProductByCategory } from "../../fakeData/ProductsData";
import Card from "../card/Card";
import CategoryCard from "../categoryCard/CategoryCard";
import Select from "../select/Select";
import SliceCategory from "../sliceCategory/SliceCategory";

const Search = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  const category =
    location.search.split("=")[1].includes("--") === true
      ? location.search.split("=")[1].split("--").join(" ")
      : location.search.split("=")[1].split("-").join(" ");
  const Product = getProductByCategory(category);
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="flex pt-10 lg:py-12">
          <div className="flex w-full">
            <div className="w-full">
              <CategoryCard />
              <SliceCategory />
              <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                <h6 className="text-sm ">
                  Total <span className="font-bold">{Product.length}</span> items Found
                </h6>
                <Select />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                {Product.map((data, index) => {
                return(
                  <Card key={index} data={data} />
                )})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
