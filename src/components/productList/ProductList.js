import React from "react";
import Card from "../card/Card";

import Select from "../select/Select";

const ProductList = ({ data }) => {
  return (
    <div>
      <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
        <h6 className="text-sm ">
          Total <span className="font-bold">{data.length}</span> items Found
        </h6>
        <Select />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
        {data.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
