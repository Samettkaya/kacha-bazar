import React from "react";
import AppDownloadLeft from "../../assets/img/app-download-img-left.png";
import AppDownloadRight from "../../assets/img/app-download-img.png";
import AppStore from "../../assets/img/app-store.svg";
import PlayStore from "../../assets/img/play-store.svg";
function MobileApp() {
  return (
    <div className="bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-3 items-center">
          <div className="flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-start ">
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
              <img className="block w-auto" src={AppDownloadLeft} />
            </span>
          </div>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold  mb-3">
              Get Your Daily Needs From Our KachaBazar Store
            </h3>
            <p className="text-base opacity-90 leading-7">
              There are many products you will find our shop, Choose your daily
              necessary product from our KachaBazar shop and get some special
              offer.
            </p>
            <div className="mt-8 block lg:flex">
              <a
                className="mx-2"
                target="_blank"
                href="https://www.apple.com/app-store/"
              >
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
                  <img className="block w-auto" src={AppStore} />
                </span>
              </a>
              <a
                className="mx-2"
                target="_blank"
                href="https://play.google.com/store/apps"
              >
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
                  <img className="block w-auto" src={PlayStore} />
                </span>
              </a>
            </div>
          </div>
          <div className="md:hidden lg:block ">
            <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
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
                <img className="block w-auto" src={AppDownloadRight} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
