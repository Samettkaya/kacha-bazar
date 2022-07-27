import React, { useEffect } from "react";

import CategoryCard from "../categoryCard/CategoryCard";
import ProductList from "../productList/ProductList";
import SliceCategory from "../sliceCategory/SliceCategory";
import NotFoundProduct from "../notFoundProduct/NotFoundProduct";
import { useSelector } from "react-redux";
import { getProductByParentCategory } from "../../fakeData/Products";
const Search = () => {
  const { product } = useSelector((state) => state.search);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data=getProductByParentCategory("fish & meat")
console.log(data)
  //   useEffect(() => {

  //     const value =
  //       location.search.split("=")[0].includes("?query") === true
  //         ? getProductByName(location.search.split("=")[1])
  //         : [];
  //         setProduct(value);
  // console.log(value)

  //   }, [location.search]);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="flex pt-10 lg:py-12">
          <div className="flex w-full">
            <div className="w-full">
              <CategoryCard />
              <SliceCategory />

              {product.length >= 1 ? (
                <ProductList data={product} />
              ) : (
                <NotFoundProduct />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
