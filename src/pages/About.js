import React, { useEffect } from "react";
import aboutUs from "../assets/img/about-us.png";
import aboutVegetables from "../assets/img/about-vegetables.png";
import men1 from "../assets/img/men-1.png";
import men2 from "../assets/img/men-2.png";
import men3 from "../assets/img/men-3.png";
import women1 from "../assets/img/women-1.png";
import women2 from "../assets/img/women-2.png";
import women3 from "../assets/img/women-3.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="flex justify-center py-10 lg:py-20 bg-page-header-bg bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom bg-page-header ">
        <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
          <div className="w-full flex justify-center flex-col relative">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-black">
              About US
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 ">
            <div>
              <h3 className="text-xl lg:text-3xl mb-2  font-semibold">
                Welcome to our KachaBazar
              </h3>
              <div className="mt-3 text-base opacity-90 leading-7">
                <p className="mb-4">
                  Holisticly seize parallel metrics and functional ROI.
                  Seamlessly revolutionize error-free internal or "organic"
                  sources before effective scenarios. Progressively incentivize
                  state of the art applications for efficient intellectual
                  capital. Credibly leverage existing distinctive mindshare
                  through cutting-edge schemas. Proactively procrastinate team
                  building paradigms coordinate client-centric total transparent
                  internal.
                </p>

                <p>
                  Dynamically embrace diverse customer service and installed
                  base paradigms. Credibly seize enterprise-wide experiences for
                  end-to-end data. Professionally brand flexible alignments and
                  cost effective architectures. Enthusiastically incentivize
                  seamless communities with seamlessly facilitate revolutionary
                  metrics with strategic theme areas.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold  mb-4 text-gray-800">
                    10K
                  </span>
                  <h4 className="text-lg font-bold mb-1">Listed Products</h4>
                  <p className="mb-0 opacity-90 leading-7">
                    Dynamically morph team driven partnerships after vertical.
                  </p>
                </div>
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold  mb-4 text-gray-800">
                    8K
                  </span>
                  <h4 className="text-lg  font-bold mb-1">Lovely Customer</h4>
                  <p className="mb-0 opacity-90 leading-7">
                    Competently productize virtual models without performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 ">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <img
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                  }}
                  src={aboutUs}
                />
              </span>
            </div>
          </div>
          <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
            <p className="mb-4">
              Holisticly seize parallel metrics and functional ROI. Seamlessly
              revolutionize error-free internal or "organic" sources before
              effective scenarios. Progressively incentivize state of the art
              applications for efficient intellectual capital. Credibly leverage
              existing distinctive mindshare through cutting-edge schemas.
              Proactively procrastinate team building paradigms coordinate
              client-centric total transparent internal. Energistically
              reconceptualize global leadership for high-quality networks.
              Credibly restore an expanded array of systems rather than accurate
              results. Collaboratively synergize backend bandwidth without 24/7
              functionalities. Credibly utilize proactive ideas whereas
              cross-media core competencies. Uniquely maximize professional best
              practices through resource maximizing services. Conveniently
              architect cross-unit web services for e-business imperatives.
            </p>
            <p>
              Appropriately visualize market-driven data before one-to-one
              scenarios. Collaboratively productize multifunctional ROI through
              intuitive supply chains. Enthusiastically seize revolutionary
              value and process-centric services. Competently harness intuitive
              information after interoperable markets. Interactively
              revolutionize future-proof value before granular sources.
              Dynamically embrace diverse customer service and installed base
              paradigms. Credibly seize enterprise-wide experiences for
              end-to-end data. Professionally brand flexible alignments and cost
              effective architectures. Enthusiastically incentivize seamless
              communities with seamlessly facilitate revolutionary metrics with
              strategic theme areas.
            </p>
          </div>
          <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0",
                margin: "0",
                padding: "0",
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
                }}
              >
                <img
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                    boxSizing: "border-box",
                  }}
                  className="block rounded-lg"
                  src={aboutVegetables}
                />
              </span>
            </span>
          </div>
        </div>
        <div className="bg-gray-50 lg:py-20 py-10">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div className="max-w-2xl">
                <h3 className="text-xl lg:text-3xl mb-2  font-semibold">
                  Our Founder
                </h3>
                <p className="mt-2 md:mt-3 font-normal block text-base">
                  We’re impartial and independent, and every day we create
                  distinctive, world-class reintermediate backend supply
                  programmes.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8 ">
              <div className="max-w-sm">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
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
                      border: "0",
                      margin: "0",
                      padding: "0",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      className="block rounded-lg"
                      style={{
                        display: "bolck",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0",
                        margin: "0",
                        padding: "0",
                      }}
                      src={men1}
                    />
                  </span>
                </span>
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">Niamh Shea</h5>
                  <span className="opacity-75 text-sm">
                    Co-founder &amp; Executive
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
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
                      border: "0",
                      margin: "0",
                      padding: "0",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      className="block rounded-lg"
                      style={{
                        display: "bolck",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0",
                        margin: "0",
                        padding: "0",
                      }}
                      src={women1}
                    />
                  </span>
                </span>
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">Orla Dwyer</h5>
                  <span className="opacity-75 text-sm">Chief Executive</span>
                </div>
              </div>
              <div className="max-w-sm">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
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
                      border: "0",
                      margin: "0",
                      padding: "0",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      className="block rounded-lg"
                      style={{
                        display: "bolck",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0",
                        margin: "0",
                        padding: "0",
                      }}
                      src={men2}
                    />
                  </span>
                </span>
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">Danien James</h5>
                  <span className="opacity-75 text-sm">
                    Co-founder, Chairman
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
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
                      border: "0",
                      margin: "0",
                      padding: "0",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      className="block rounded-lg"
                      style={{
                        display: "bolck",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0",
                        margin: "0",
                        padding: "0",
                      }}
                      src={women2}
                    />
                  </span>
                </span>
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">Dara Frazier</h5>
                  <span className="opacity-75 text-sm">
                    Chief Strategy Officer
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
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
                      border: "0",
                      margin: "0",
                      padding: "0",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      className="block rounded-lg"
                      style={{
                        display: "bolck",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0",
                        margin: "0",
                        padding: "0",
                      }}
                      src={women3}
                    />
                  </span>
                </span>
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">Glenda Arvidson</h5>
                  <span className="opacity-75 text-sm">HR Officer</span>
                </div>
              </div>
              <div className="max-w-sm">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
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
                      border: "0",
                      margin: "0",
                      padding: "0",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      className="block rounded-lg"
                      style={{
                        display: "bolck",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0",
                        margin: "0",
                        padding: "0",
                      }}
                      src={men3}
                    />
                  </span>
                </span>
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">Melvin Davis</h5>
                  <span className="opacity-75 text-sm">Lead Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
