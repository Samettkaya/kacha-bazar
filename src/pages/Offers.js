import React, { useEffect } from "react";
import DateTimeDisplay from "../components/dateTimeDisplay/DateTimeDisplay";
import { Coupon } from "../fakeData/coupon";
import { useCountDown } from "../hooks/useCountDown";
const ExpiredNotice = ({ counter }) => {
  return (
    <span className="inline-block mb-2">
      <div className="flex items-center font-semibold text-black">
        <DateTimeDisplay value="00" counter={counter} />
        :
        <DateTimeDisplay value="00" counter={counter} />
        :
        <DateTimeDisplay value="00" counter={counter} />
        :
        <DateTimeDisplay value="00" counter={counter} />
      </div>
    </span>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <span className="inline-block mb-2">
      <div className="flex items-center font-semibold text-black">
        <DateTimeDisplay value={days} />
        :
        <DateTimeDisplay value={hours} />
        :
        <DateTimeDisplay value={minutes} />
        :
        <DateTimeDisplay value={seconds} />
      </div>
    </span>
  );
};

const ShowCoupon = ({ item }) => {
  const targetDate = new Date(item.endTime).getTime();
  const [days, hours, minutes, seconds] = useCountDown(targetDate);
  const counter = days + hours + minutes + seconds;
  const onchangeClipboard = (value) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="block md:flex lg:flex md:justify-between lg:justify-between itemms-center bg-white rounded-md shadow-sm">
      <div className="p-6 flex items-center justify-items-start">
        <figure>
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
              alt={item.title}
              srcSet={`${item.logo} 128w,${item.logo} 256w`}
              src={`${item.logo} 256w`}
              decoding="async"
              data-nimg="intrinsic"
              className="rounded-lg"
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
        </figure>

        <div className="ml-5">
          {counter <= 0 ? (
            <ExpiredNotice counter={counter} />
          ) : (
            <ShowCounter
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          )}
          <h2 className=" text-lg leading-6 font-medium mb-3">{item.title}</h2>
          <p className=" font-bold text-xl text-gray-600">
            <span className="text-lg md:text-xl lg:text-2xl leading-12 text-red-500 font-extrabold">
              {item.discountPercentage}%
            </span>{" "}
            Off
          </p>
        </div>
      </div>
      <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-6">
        <div
          className=" flex lg:my-6 md:my-5 mb-6 items-center 
          md:before:-top-[10px] md:before:-left-[13px] md:before:absolute md:before:w-[25px] md:before:h-[25px] md:before:bg-[#fafafa] md:before:rounded-[100%] 
          md:after:-bottom-[10px] md:after:-left-[13px] md:after:absolute md:after:w-[25px] md:after:h-[25px] md:after:bg-[#fafafa] md:after:rounded-[100%]
        
        "
        >
          <div className="w-full">
            <div className="block">
              <div className=" font-medium flex items-center mb-1">
                <span className="text-black">Coupon</span>
                <div className="ml-2">
                  {counter <= 0 ? (
                    <span className="text-red-600 inline-block">Inactive</span>
                  ) : (
                    <span className="text-emerald-600 inline-block">
                      Active
                    </span>
                  )}
                </div>
              </div>
              <div className=" border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block">
                <button
                  onClick={() => {
                    onchangeClipboard(item.couponCode);
                  }}
                  className="block w-full"
                >
                  <span className="uppercase  font-semibold text-base leading-7 text-emerald-600">
                    {item.couponCode}{" "}
                  </span>
                </button>
              </div>
            </div>
            <p className="text-xs leading-5 text-gray-500 mt-2">
              * This coupon code will apply on{" "}
              <span className="font-bold text-gray-700">
                {item.productType} type products
              </span>{" "}
              and when you shopping more then{" "}
              <span className="font-bold text-gray-700">
                ${item.minimumAmount}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Offers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50">
      <div className="flex justify-center py-10 lg:py-20 bg-page-header-bg bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom bg-page-header ">
        <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
          <div className="w-full flex justify-center flex-col relative">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-black">
              Mega Offer
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 py-10 lg:py-20 sm:px-10">
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
          {Coupon.map((item, index) => (
            <ShowCoupon item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
