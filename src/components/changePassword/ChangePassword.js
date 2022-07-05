import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email address is required!"),
  currentPassword: Yup.string().required("Current Password is required!"),
  newPassword: Yup.string().required("New Password is required!"),
});
const ChangePassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-screen-2xl">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h2 className="text-xl font-semibold mb-5 text-black">
              Change Password
            </h2>
          </div>
        </div>
      </div>

      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div className="md:grid-cols-6 md:gap-6">
                <div className=" md:mt-0 md:col-span-2">
                  <div className="lg:mt-6bg-white">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="email"
                          className="block text-gray-500 font-medium text-sm leading-none mb-2"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Field
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                          />
                        </div>
                        <span className="text-red-400 text-sm mt-2">
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </span>
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="currentPassword"
                          className="block text-gray-500 font-medium text-sm leading-none mb-2"
                        >
                          Current Password
                        </label>
                        <div className="relative">
                          <Field
                            id="currentPassword"
                            name="currentPassword"
                            placeholder="Your Current Password"
                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                          />
                        </div>
                        <span className="text-red-400 text-sm mt-2">
                          {errors.currentPassword &&
                            touched.currentPassword && (
                              <div>{errors.currentPassword}</div>
                            )}
                        </span>
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="newPassword"
                          className="block text-gray-500 font-medium text-sm leading-none mb-2"
                        >
                          New Password
                        </label>
                        <div className="relative">
                          <Field
                            id="newPassword"
                            name="newPassword"
                            placeholder="Your New Password"
                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                          />
                        </div>
                        <span className="text-red-400 text-sm mt-2">
                          {errors.newPassword && touched.newPassword && (
                            <div>{errors.newPassword}</div>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-right">
                <button
                  type="submit"
                  className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                  disabled=""
                >
                  Change Password
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ChangePassword;
