import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import OrderSummary from "../orderSummary/OrderSummary";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import randomId from "random-id";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email address is required!"),
  phoneNumber: Yup.string().required("Phone number is required!"),
  streetAddress: Yup.string().required("Street address is required!"),
  city: Yup.string().required("City is required!"),
  country: Yup.string().required("Country is required!"),
  zipPostal: Yup.string().required("ZIP / Postal is required"),
  shippingOption: Yup.string().required("Shipping Option is required!"),
  paymentMethod: Yup.string().required("Payment Method is required"),
});
function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let navigate = useNavigate();
  var Id = randomId(30,"aA0");
  var Invoice = randomId(5, "0");

  const { ...item } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  const onchangeSubmit = (value) => {
    const data = {
      createdDate: new Date(),
      updatedDate: new Date(),
      invoce: Invoice,
      id: Id,
      cart: item,
      ...value,
    };

    localStorage.setItem(Id, JSON.stringify(data));
    setTimeout(() => {
      navigate("/order/" + Id);
     
    }, 2000);
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
          <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
            <div className="mt-5 md:mt-0 md:col-span-2">
              
              <Formik
                initialValues={{
                  firstName: "samet",
                  lastName: "kaya",
                  email: "kaya67380@gmail.com",
                  phoneNumber: "1235",
                  streetAddress: "kadıköy",
                  city: "istanbul",
                  country: "kadıköy",
                  zipPostal: "3400",
                  shippingOption: "FedEx",
                  paymentMethod: "COD",
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                  onchangeSubmit(values);
                }}
              >
                {({ errors, touched }) => {
                  return (
                    <Form>
                      <div>
                        <h2 className="font-semibold  text-base text-gray-700 pb-3">
                          01. Personal Details
                        </h2>
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="firstName"
                              className="block text-gray-500 font-medium text-sm leading-none mb-2"
                            >
                              First Name
                            </label>
                            <div className="relative">
                              <Field
                                className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg:white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                id="firstName"
                                name="firstName"
                                placeholder="Samet"
                              />
                            </div>
                            {errors.firstName && touched.firstName && (
                              <span className="text-red-400 text-sm mt-2">
                                {errors.firstName}
                              </span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="lastName"
                              className="block text-gray-500 font-medium text-sm leading-none mb-2"
                            >
                              Last Name
                            </label>
                            <div className="relative">
                              <Field
                                className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg:white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                id="lastName"
                                name="lastName"
                                placeholder="Kaya"
                              />
                            </div>
                            {errors.lastName && touched.lastName && (
                              <span className="text-red-400 text-sm mt-2">
                                {errors.lastName}
                              </span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="email"
                              className="block text-gray-500 font-medium text-sm leading-none mb-2"
                            >
                              Email Address
                            </label>
                            <div className="relative">
                              <Field
                                className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg:white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                id="email"
                                name="email"
                                placeholder="info@gmail.com"
                              />
                            </div>
                            {errors.email && touched.email && (
                              <span className="text-red-400 text-sm mt-2">
                                {errors.email}
                              </span>
                            )}
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="phoneNumber"
                              className="block text-gray-500 font-medium text-sm leading-none mb-2"
                            >
                              Phone Number
                            </label>
                            <div className="relative">
                              <Field
                                className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg:white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="+90-1234567891"
                              />
                            </div>
                            {errors.phoneNumber && touched.phoneNumber && (
                              <span className="text-red-400 text-sm mt-2">
                                {errors.phoneNumber}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mt-12">
                        <h2 className="font-semibold  text-base text-gray-700 pb-3">
                          02. Shipping Details
                        </h2>
                        <div className="grid grid-cols-6 gap-6 mb-8">
                          <div className="col-span-6 ">
                            <label
                              htmlFor="streetAddress"
                              className="block text-gray-500 font-medium text-sm leading-none mb-2"
                            >
                              Street Address
                            </label>
                            <div className="relative">
                              <Field
                                className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg:white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                id="streetAddress"
                                name="streetAddress"
                                placeholder="ümraniye sondurak No:3 Daire:70 Ümraniye/İstanbul"
                              />
                            </div>
                            {errors.streetAddress && touched.streetAddress && (
                              <span className="text-red-400 text-sm mt-2">
                                {errors.streetAddress}
                              </span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-gray-500 font-medium text-sm leading-none mb-2"
                            >
                              City
                            </label>
                            <div className="relative">
                              <Field
                                className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg:white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                id="city"
                                name="city"
                                placeholder="İstanbul"
                              />
                            </div>
                            {errors.city && touched.city && (
                              <span className="text-red-400 text-sm mt-2">
                                {errors.city}
                              </span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="country"
                              className="block text-gray-500 font-medium text-sm leading-none mb-2"
                            >
                              Country
                            </label>
                            <div className="relative">
                              <Field
                                className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg:white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                id="country"
                                name="country"
                                placeholder="Ümraniye"
                              />
                            </div>
                            {errors.country && touched.country && (
                              <span className="text-red-400 text-sm mt-2">
                                {errors.country}
                              </span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="zipPostal"
                              className="block text-gray-500 font-medium text-sm leading-none mb-2"
                            >
                              ZIP / Postal
                            </label>
                            <div className="relative">
                              <Field
                                className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg:white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                id="zipPostal"
                                name="zipPostal"
                                placeholder="34000"
                              />
                            </div>
                            {errors.zipPostal && touched.zipPostal && (
                              <span className="text-red-400 text-sm mt-2">
                                {errors.zipPostal}
                              </span>
                            )}
                          </div>
                        </div>
                        <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                          Shipping Cost
                        </label>
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <div>
                              <div className="p-3 border border-gray-200 bg-white rounded-md ">
                                <label className="cursor-pointer label">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <span className="text-2xl mr-3 text-gray-400">
                                        <svg
                                          stroke="currentColor"
                                          fill="none"
                                          strokeWidth="2"
                                          viewBox="0 0 24 24"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <rect
                                            x="1"
                                            y="3"
                                            width="15"
                                            height="13"
                                          ></rect>
                                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                          <circle
                                            cx="5.5"
                                            cy="18.5"
                                            r="2.5"
                                          ></circle>
                                          <circle
                                            cx="18.5"
                                            cy="18.5"
                                            r="2.5"
                                          ></circle>
                                        </svg>
                                      </span>
                                      <div>
                                        <h6 className=" font-medium text-sm text-gray-600">
                                          FedEx
                                        </h6>
                                        <p className="text-xs text-gray-500 font-medium">
                                          Delivery: Today{" "}
                                          <span className="font-medium text-gray-600">
                                            Cost : $60.00
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <Field
                                      type="radio"
                                      name="shippingOption"
                                      value="FedEx"
                                      className="form-radio outline-none focus:ring-0 text-emerald-500"
                                    />
                                  </div>
                                </label>
                              </div>
                            </div>
                            {errors.shippingOption &&
                              touched.shippingOption && (
                                <span className="text-red-400 text-sm mt-2">
                                  {errors.shippingOption}
                                </span>
                              )}
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <div>
                              <div className="p-3 border border-gray-200 bg-white rounded-md ">
                                <label className="cursor-pointer label">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <span className="text-2xl mr-3 text-gray-400">
                                        <svg
                                          stroke="currentColor"
                                          fill="none"
                                          strokeWidth="2"
                                          viewBox="0 0 24 24"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <rect
                                            x="1"
                                            y="3"
                                            width="15"
                                            height="13"
                                          ></rect>
                                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                          <circle
                                            cx="5.5"
                                            cy="18.5"
                                            r="2.5"
                                          ></circle>
                                          <circle
                                            cx="18.5"
                                            cy="18.5"
                                            r="2.5"
                                          ></circle>
                                        </svg>
                                      </span>
                                      <div>
                                        <h6 className=" font-medium text-sm text-gray-600">
                                          UPS
                                        </h6>
                                        <p className="text-xs text-gray-500 font-medium">
                                          Delivery: 7 Days{" "}
                                          <span className="font-medium text-gray-600">
                                            Cost : $20.00
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <Field
                                      type="radio"
                                      name="shippingOption"
                                      value="UPS"
                                      className="form-radio outline-none focus:ring-0 text-emerald-500"
                                    />
                                  </div>
                                </label>
                              </div>
                            </div>
                            {errors.shippingOption &&
                              touched.shippingOption && (
                                <span className="text-red-400 text-sm mt-2">
                                  {errors.shippingOption}
                                </span>
                              )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-12">
                        <h2 className="font-semibold  text-base text-gray-700 pb-3">
                          03. Payment Details
                        </h2>
                        <div className="mb-3">Stripe is Payment</div>
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <div className="px-3 py-4 border border-gray-200 bg-white rounded-md">
                              <label className="cursor-pointer">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <span className="text-xl mr-3 text-gray-400">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M47.5 104H432V51.52a16 16 0 00-19.14-15.69l-368 60.48a16 16 0 00-12 10.47A39.69 39.69 0 0147.5 104zm416 24h-416a16 16 0 00-16 16v288a16 16 0 0016 16h416a16 16 0 0016-16V144a16 16 0 00-16-16zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                                        <path d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236z"></path>
                                      </svg>
                                    </span>
                                    <h6 className=" font-medium text-sm text-gray-600">
                                      Cash On Delivery
                                    </h6>
                                  </div>
                                  <Field
                                    type="radio"
                                    name="paymentMethod"
                                    value="COD"
                                    className="form-radio outline-none focus:ring-0 text-emerald-500"
                                  />
                                </div>
                              </label>
                            </div>
                            {errors.paymentMethod && touched.paymentMethod && (
                              <span className="text-red-400 text-sm mt-2">
                                {errors.paymentMethod}
                              </span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <div className="px-3 py-4 border border-gray-200 bg-white rounded-md">
                              <label className="cursor-pointer">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <span className="text-xl mr-3 text-gray-400">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M47.5 104H432V51.52a16 16 0 00-19.14-15.69l-368 60.48a16 16 0 00-12 10.47A39.69 39.69 0 0147.5 104zm416 24h-416a16 16 0 00-16 16v288a16 16 0 0016 16h416a16 16 0 0016-16V144a16 16 0 00-16-16zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                                        <path d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236z"></path>
                                      </svg>
                                    </span>
                                    <h6 className=" font-medium text-sm text-gray-600">
                                      Credit Card
                                    </h6>
                                  </div>
                                  <Field
                                    type="radio"
                                    name="paymentMethod"
                                    value="Card"
                                    className="form-radio outline-none focus:ring-0 text-emerald-500"
                                  />
                                </div>
                              </label>
                            </div>
                            {errors.paymentMethod && touched.paymentMethod && (
                              <span className="text-red-400 text-sm mt-2">
                                {errors.paymentMethod}
                              </span>
                            )}
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                        <div className="col-span-6 sm:col-span-3">
                          <Link
                            className="bg-indigo-50 border !no-underline border-indigo-100 rounded py-3 text-center text-sm font-medium !text-gray-700  hover:!text-gray-800 hover:border-gray-300 transition-all flex justify-center w-full"
                            to="/"
                          >
                            <span className="text-xl mr-2">
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
                                  d="M112 160l-64 64 64 64"
                                ></path>
                                <path
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="32"
                                  d="M64 224h294c58.76 0 106 49.33 106 108v20"
                                ></path>
                              </svg>
                            </span>
                            Continue Shopping
                          </Link>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <button
                            type="submit"
                            disabled=""
                            className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 transition-all rounded py-3 text-center text-sm  font-medium text-white flex justify-center w-full"
                          >
                            Confirm Order{" "}
                            <span className="text-xl ml-2">
                              {" "}
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
                                  strokeWidth="48"
                                  d="M268 112l144 144-144 144m124-144H100"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
