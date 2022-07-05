import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Formik, Field, Form } from "formik";
import { useDispatch,useSelector } from "react-redux";
import * as Yup from "yup";
import { isLoginAction } from "../../store/reducers/isOpenSlice";
const Login = ({ setIsOpenRegister }) => {
  const dispatch = useDispatch();
  
  const {isOpen }= useSelector(state=>state.isOpen)
  const LoginSchema = Yup.object().shape({
    password: Yup.string().required("Password is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
  });
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className=" fixed inset-0 overflow-y-auto text-center z-30"
        onClose={() =>  dispatch(isLoginAction(false))}
      >
        <div className="min-h-screen px-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            ​
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className="
            inline-block w-full max-w-lg
            p-10 overflow-hidden text-left 
            align-middle transition-all transform 
            bg-white shadow-xl rounded-2xl "
            >
              <div className="overflow-hidden bg-white mx-auto ">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-black">Login</h2>
                  <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
                    Login with your email and password
                  </p>
                </div>

                <Formik
                  validationSchema={LoginSchema}
                  initialValues={{
                    password: "",
                    email: "",
                  }}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                  {({ errors, touched, isValidating }) => (
                    <Form className="flex flex-col justify-center">
                      <div className="grid grid-cols-1 gap-5">
                        <div className="grid">
                          <label
                            htmlFor="email"
                            className="block text-gray-500 font-medium text-sm leading-none mb-2 "
                          >
                            Email
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
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
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                  <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                              </span>
                            </div>
                            <Field
                              className="py-2 pl-10 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                              id="email"
                              name="email"
                              placeholder="Email"
                              type="email"
                            />
                          </div>
                          {errors.email && touched.email && (
                            <span className="text-red-400 text-sm mt-2">
                              {errors.email}
                            </span>
                          )}
                        </div>
                        <div className="grid">
                          <label
                            className="block text-gray-500 font-medium text-sm leading-none mb-2 "
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
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
                                    x="3"
                                    y="11"
                                    width="18"
                                    height="11"
                                    rx="2"
                                    ry="2"
                                  ></rect>
                                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                              </span>
                            </div>
                            <Field
                              className="py-2 pl-10 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                              id="password"
                              name="password"
                              placeholder="Password"
                              type="password"
                            />
                          </div>
                          {errors.password && touched.password && (
                            <span className="text-red-400 text-sm mt-2">
                              {errors.password}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-black justify-between">
                          <div className="flex ms-auto">
                            <button
                              type="button"
                              className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
                            >
                              Forgot password?
                            </button>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
                        >
                          Login
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="my-8 after:bg-gray-100 before:bg-gray-100 fo10t-sans text-center font-medium">
                  OR
                </div>
                <div className="flex justify-between flex-col lg:flex-row">
                  <button className="text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold  text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path>
                    </svg>{" "}
                    <span className="ml-2">Login With Facebook</span>
                  </button>
                  <button className="text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.159 6.856v2.744h4.537c-0.184 1.178-1.372 3.45-4.537 3.45-2.731 0-4.959-2.262-4.959-5.050s2.228-5.050 4.959-5.050c1.553 0 2.594 0.663 3.188 1.234l2.172-2.091c-1.394-1.306-3.2-2.094-5.359-2.094-4.422 0-8 3.578-8 8s3.578 8 8 8c4.616 0 7.681-3.247 7.681-7.816 0-0.525-0.056-0.925-0.125-1.325l-7.556-0.003z"></path>
                    </svg>{" "}
                    <span className="ml-2">Login With Google</span>
                  </button>
                </div>
                <div className="text-center text-sm text-gray-900 mt-4">
                  <div className="text-gray-500 mt-2.5">
                    Not have a account ?
                    <button
                      onClick={() => {
                        setIsOpenRegister(true);
                        dispatch(isLoginAction(false));
                      }}
                      className="text-gray-800 hover:text-emerald-500 font-bold mx-2"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              onClick={() => dispatch(isLoginAction(false))}
              className="absolute right-5 top-5"
            >
              <button
                type="button"
                className="inline-flex justify-center px-2 py-2 text-base font-medium text-red-500 bg-white border border-transparent rounded-full hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
                  <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                </svg>
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Login;
