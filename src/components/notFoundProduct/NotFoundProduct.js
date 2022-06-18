import React from "react";
import NotFound from "../../assets/img/no-result.svg";
const NotFoundProduct = () => {
  return (
    <div className="text-center align-middle mx-auto p-5 my-5">
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          alt="no-result"
          src={NotFound}
          decoding="async"
          data-nimg="intrinsic"
          className="my-4 w-1/3 h-1/3  "
          
        />
      </span>

      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium text-gray-600">
        Sorry, we can not find this product 😞
      </h2>
    </div>
  );
};

export default NotFoundProduct;
