import React, { useMemo, useState } from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

import Select from "../select/Select";
let PageSize = 12;
const ProductList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
        <h6 className="text-sm ">
          Total <span className="font-bold">{data.length}</span> items Found
        </h6>
        <Select />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
        {currentTableData.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
           
      </div> 
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductList;
