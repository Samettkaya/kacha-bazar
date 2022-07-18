import moment from "moment";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../../assets/icon/logo-color.svg"
function Order({}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem(id));

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-2xl mx-auto py-10 px-3 sm:px-6">
        <div className="!bg-emerald-100 rounded-md mb-5 px-4 py-3">
          <label>
            Thank you{" "}
            <span className="font-bold text-emerald-600">
              {data.firstName} {data.lastName},
            </span>{" "}
            Your order have been received !
          </label>
        </div>
        <div className="bg-white rounded-lg shadow-sm">
          <div>
            <div className="bg-indigo-50 p-8 rounded-t-xl">
              <div className="flex lg:flex-row md:flex-col lg:items-center justify-between pb-4 border-b border-gray-50">
                <h1 className="font-bold  text-2xl uppercase">Invoice</h1>
                <div className="lg:text-right text-left">
                  <h2 className="text-lg font-semibold mt-4 lg:mt-0 md:mt-0 h-20">
                    <Link to="/">
                      <span
                        style={{
                          boxSizing: " border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: " 0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                            style={{
                              display: "block",
                              maxWidth: "100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: "1",
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                            }}
                          />
                        </span>
                        <img
                          alt="logo"
                           srcSet={`${Logo} 1x,${Logo} 2x`}
                           src={`${Logo}`}
                          decoding="async"
                          data-nimg="intrinsic"
                          className="rounded-lg "
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "border-box",
                            padding: "0px",
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: " 100%",
                            maxHeight: "100%",
                          }}
                        />
                      </span>
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-500">
                    Kazım Karabekir, No:5  Ümraniye, <br /> İstanbul
                    34000{" "}
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
                <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                  <span className="font-bold  text-sm uppercase text-gray-600 block">
                    Date
                  </span>
                  <span className="text-sm text-gray-500 block">
                    <span>{moment(data.createdDate).format("MMMM DD, YYYY")}</span>
                  </span>
                </div>
                <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                  <span className="font-bold  text-sm uppercase text-gray-600 block">
                    Invoice No.
                  </span>
                  <span className="text-sm text-gray-500 block">#{data.invoce}</span>
                </div>
                <div className="flex flex-col lg:text-right text-left">
                  <span className="font-bold  text-sm uppercase text-gray-600 block">
                    Invoice To.
                  </span>
                  <span className="text-sm text-gray-500 block">
                   {data.firstName} {data.lastName} 
                    <br />
                 {data.streetAddress}
                    <br />
                   {data.city}, {data.country}, {data.zipPostal}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden lg:overflow-visible px-8 my-10">
                <div className="-my-2 overflow-x-auto">
                  <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="text-xs bg-gray-100">
                        <th
                          scope="col"
                          className=" font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
                        >
                          Sr.
                        </th>
                        <th
                          scope="col"
                          className=" font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          className=" font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className=" font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
                        >
                          Item Price
                        </th>
                        <th
                          scope="col"
                          className=" font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-right"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100 text-serif text-sm">
                  {data.cart.cartItems.map((items,index)=>(
                        <tr key={index}>
                        <th className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
                          {index+1}
                        </th>
                        <td className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
                          {items.title}
                        </td>
                        <td className="px-6 py-1 whitespace-nowrap font-bold text-center">
                     {items.cartQuantity}
                        </td>
                        <td className="px-6 py-1 whitespace-nowrap font-bold text-center font-DejaVu">
                          {formatter.format(items.price)}
                        </td>
                        <td className="px-6 py-1 whitespace-nowrap text-right font-bold font-DejaVu k-grid text-red-500">
                          
                          {formatter.format(items.price*items.cartQuantity)}
                        </td>
                      </tr>
                  ))}
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="border-t border-b border-gray-100 p-10 bg-emerald-50">
              <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
                <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col sm:flex-wrap">
                  <span className="mb-1 font-bold  text-sm uppercase text-gray-600 block">
                    Payment Method
                  </span>
                  <span className="text-sm text-gray-500 font-semibold  block">
                    {data.paymentMethod}
                  </span>
                </div>
                <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col sm:flex-wrap">
                  <span className="mb-1 font-bold  text-sm uppercase text-gray-600 block">
                    Shipping Cost
                  </span>
                  <span className="text-sm text-gray-500 font-semibold block">
                  
                    {
                      
                    data.shippingOption==="FedEx"?formatter.format(60):formatter.format(20)
                    
                    }
                  </span>
                </div>
                <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col sm:flex-wrap">
                  <span className="mb-1 font-bold  text-sm uppercase text-gray-600 block">
                    Discount
                  </span>
                  <span className="text-sm text-gray-500 font-semibold block">
                    $0.00
                  </span>
                </div>
                <div className="flex flex-col sm:flex-wrap">
                  <span className="mb-1 font-bold text-sm uppercase text-gray-600 block">
                    Total Amount
                  </span>
                  <span className="text-2xl  font-bold text-red-500 block">
                   {formatter.format(data.cart.cartTotalAmount)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-b-xl">
            <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between">
              <a
                download="Invoice"
                href="blob:https://kachabazar-store.vercel.app/323a6e45-6fc0-439e-b949-0d694f0edde8"
              >
                <button className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md">
                  Download Invoice{" "}
                  <span className="ml-2 text-base">
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56m0 64.1l64 63.9 64-63.9M256 224v224.03"
                      ></path>
                    </svg>
                  </span>
                </button>
              </a>
              <button className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md">
                Print Invoice{" "}
                <span className="ml-2">
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
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
                    ></path>
                    <rect
                      width="256"
                      height="208"
                      x="128"
                      y="240"
                      fill="none"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      rx="24.32"
                      ry="24.32"
                    ></rect>
                    <path
                      fill="none"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
                    ></path>
                    <circle cx="392" cy="184" r="24"></circle>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
