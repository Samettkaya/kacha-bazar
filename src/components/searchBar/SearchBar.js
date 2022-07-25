import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchAction } from "../../store/reducers/searchSlice";

function SearchBar() {
  const [value, setValue] = useState();

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleSearchClick = () => {
    navigate("search?query=" + value);
    dispatch(searchAction({ value: value, path: "query" }));
   
  };

  return (
    <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
      <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
        <div className="flex flex-col mx-auto w-full">
          <div className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full">
            <label className="flex items-center py-0.5">
              <input
               value={value}
               name="value"
               onKeyPress={event => {
                if (event.key === 'Enter') {
                  handleSearchClick()

                }
              }}
                onChange={(e) => setValue(e.target.value)}
                className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                placeholder="Search for products (e.g. fish, apple, oil)"
              />
            </label>
            <button
              type="submit"
              onClick={() => handleSearchClick()}
              aria-label="Search"
              className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                ></path>
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M338.29 338.29L448 448"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
