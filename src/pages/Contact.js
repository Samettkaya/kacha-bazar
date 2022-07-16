import React, { useEffect } from "react";
import contactUs from "../assets/img/contact-us.png";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="flex justify-center py-10 lg:py-20 bg-page-header-bg bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom bg-page-header ">
        <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
          <div className="w-full flex justify-center flex-col relative">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-black">
              Contact Us
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 ">
            <div className="border p-10 rounded-lg text-center">
              <span className="flex justify-center text-4xl text-emerald-500 mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  height="1em"
                  width="1em"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <h5 class="text-xl mb-2 font-bold">Email Us</h5>
              <p className="mb-0 text-base opacity-90 leading-7">
                <a href="mailto:kachabazar@gmail.com" class="text-emerald-500">
                  kachabazar@gmail.com{" "}
                </a>
                Interactively grow empowered for process-centric total linkage.
              </p>
            </div>
            <div class="border p-10 rounded-lg text-center">
              <span class="flex justify-center text-4xl text-emerald-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  height="1em"
                  width="1em"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <h5 class="text-xl mb-2 font-bold">Call Us</h5>
              <p class="mb-0 text-base opacity-90 leading-7">
                <a href="mailto:029-00124667" class="text-emerald-500">
                  029-00124667{" "}
                </a>
                Distinctively disseminate focused solutions clicks-and-mortar
                ministate.
              </p>
            </div>
            <div class="border p-10 rounded-lg text-center">
              <span class="flex justify-center text-4xl text-emerald-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  height="1em"
                  width="1em"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <h5 class="text-xl mb-2 font-bold">Location</h5>
              <p class="mb-0 text-base opacity-90 leading-7">
                <a href="mailto:" class="text-emerald-500"></a> Cecilia Chapman,
                561-4535 Nulla LA, United States 96522
              </p>
            </div>
          </div>
          <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
            <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0px",
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
                    aria-hidden="true"
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
                    src={contactUs}
                  ></img>
                </span>
              </span>
            </div>
            <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
              <form className="w-full mx-auto flex flex-col justify-center">
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">
                    For any suppoort just send your query
                  </h3>
                  <p className="text-base opacity-90 leading-7">
                    Collaboratively promote client-focused convergence vis-a-vis
                    customer directed alignments via plagiarize strategic users
                    and standardized infrastructures.
                  </p>
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 ">
                    <div className="w-full md:w-1/2">
                      <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          name="name"
                          type="text"
                          placeholder="Inter Your Name"
                          class="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                        ></input>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
                      <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                        Your Email
                      </label>
                      <div className="relative">
                        <input
                          name="email"
                          type="email"
                          placeholder="Inter Your Email"
                          class="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        name="subject"
                        type="text"
                        placeholder="Inter Your Subject"
                        class="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                        
                      ></input>
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      class="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"
                      autocomplete="off"
                      spellcheck="false"
                      rows="4"
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
                  <div className="relative">
                    <button
                      data-variant="flat"
                      class="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-base w-full sm:w-auto"
                    >
                      {" "}
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
