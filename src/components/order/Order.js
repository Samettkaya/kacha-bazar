import React from "react";
import { Link } from "react-router-dom";

function Order() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-2xl mx-auto py-10 px-3 sm:px-6">
        <div className="!bg-emerald-100 rounded-md mb-5 px-4 py-3">
          <label>
            Thank you{" "}
            <span className="font-bold text-emerald-600">Samet Kaya,</span> Your
            order have been received !
          </label>
        </div>
        <div className="bg-white rounded-lg shadow-sm">
          <div>
            <div className="bg-indigo-50 p-8 rounded-t-xl">
              <div className="flex lg:flex-row md:flex-col lg:items-center justify-between pb-4 border-b border-gray-50">
                <h1 className="font-bold  text-2xl uppercase">Invoice</h1>
                <div className="lg:text-right text-left">
                  <h2 className="text-lg font-semibold mt-4 lg:mt-0 md:mt-0">
                    <Link to="/">
                      {/* <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                        <img
                          alt="logo"
                          srcset="/logo/logo-color.svg 1x, /logo/logo-color.svg 2x"
                          src="/logo/logo-color.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                         
                        />
                      </span> */}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-500">
                    Cecilia Chapman, 561-4535 Nulla LA, <br /> United States
                    96522{" "}
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
