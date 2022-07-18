import React from "react";
import ins1 from "../../assets/img/ins3.png";
import { useCountDown } from "../../hooks/useCountDown";
import DateTimeDisplay from "../dateTimeDisplay/DateTimeDisplay";

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

function LatestDiscountCouponCode({ data }) {
  const targetDate = new Date(data.endTime).getTime();
  const [days, hours, minutes, seconds] = useCountDown(targetDate);
  const counter = days + hours + minutes + seconds;

  const onchangeClipboard = (value) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
      <div className="tengah py-2 px-3 flex items-center justify-items-start">
        <figure className="flex items-center" >
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
              alt={data.title}
              srcSet={`${data.logo} 128w,${data.logo} 256w`}
              src={`${data.logo} 256w`}
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

        <div className="ml-3">
          <div className="flex items-center">
            <h6 className="pl-1 text-base font-medium text-gray-600">
              <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                {data.discountPercentage}% {""}
              </span>
              Off
            </h6>
            <div className="ml-2">
              {counter <= 0 ? (
                <span className="text-red-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-red-100">
                  Inactive
                </span>
              ) : (
                <span className="text-emerald-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-emerald-100">
                  Active
                </span>
              )}
            </div>
          </div>
          <h2 className="pl-1 text-base text-gray-700 leading-6 font-semibold mb-2">
            {data.title}
          </h2>
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
        </div>
      </div>
      <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
        <div className="flex items-center 
        md:before:-top-[30px] md:before:-left-[13px] md:before:absolute md:before:w-[25px] md:before:h-[25px] md:before:bg-[#fafafa] md:before:rounded-[100%] 
        md:after:-bottom-[30px] md:after:-left-[13px] md:after:absolute md:after:w-[25px] md:after:h-[25px] md:after:bg-[#fafafa] md:after:rounded-[100%]
        ">
          <div className="w-full">
            <div className="block">
              <div className=" border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block">
                <button
                  onClick={() => onchangeClipboard(data.couponCode)}
                  className="block w-full"
                >
                  <span
                    id=""
                    className="uppercase  font-semibold text-sm leading-7 text-emerald-600"
                  >
                    {data.couponCode}
                  </span>
                </button>
              </div>
            </div>
            <p className="text-xs leading-4 text-gray-500 mt-2">
              * This coupon apply when shopping more then
              <span className="font-bold"> ${data.minimumAmount}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestDiscountCouponCode;
