import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../../hooks/usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={" flex items-center justify-center gap-4 mt-8"}>
      <button
        className={currentPage ===1?  "text-[#979797]  rounded-full p-1 !cursor-default":  "text-[#575757] hover:text-green-600 rounded-full p-1 !cursor-default"}
        disabled={currentPage === 1 ? true : false}
        onClick={onPrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className="text-[$575757] pagination-item dots font-semibold">
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={
              pageNumber === currentPage
                ? "font-semibold bg-green-500 text-white h-8 w-8 items-center flex justify-center rounded-full"
                : "font-semibold text-[$575757] cursor-pointer hover:bg-green-500 h-8 w-8 items-center flex justify-center rounded-full hover:text-white "
            }
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <button
        className={currentPage ===lastPage?  "text-[#979797]  rounded-full p-1 !cursor-default":  "text-[#575757] hover:text-green-600 rounded-full p-1 !cursor-default"}
        disabled={currentPage === lastPage ? true : false}
        onClick={onNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </ul>
  );
};

export default Pagination;
