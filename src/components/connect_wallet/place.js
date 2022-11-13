import React from "react";
import Card from "../card";

const placeData = [
  "/one.webp",
  "/two.webp",
  "/three.webp",
  "/four.webp",
  "/five.webp",
  "/six.webp",
  "/seven.webp",
  "/eight.webp",
  "/nine.webp",
  "/ten.webp",
  "/eleven.webp",
  "/twelve.webp",
  "/thirteen.webp",
  "/fourteen.webp",
  "/fifteen.webp",
  "/sixteen.webp",
];

const subHeading = [
  "Resturant",
  "Cottage",
  "Castle",
  "fantast city",
  "beach",
  "Carbins",
  "Farm",
  "Location",
];

function Place() {
  return (
    <div className='mt-10 w-full'>
      <div className='sub-heading max-w-[1250px] w-[90%] mx-[auto] my-0 pb-4 flex justify-between gap-8 items-center overflow-auto '>
        {subHeading.map((text, idx) => (
          <span
            key={idx}
            className={`font-normal flex whitespace-nowrap justify-center text-[18px] text-[#434343] ${
              text === "Location" ? "" : ""
            }`}
          >
            {text === "Location" ? (
              <div className='flex gap-5 justify-evenly items-center border-[1px] rounded-[8px] py-2 px-5 border-[#B4B4B4]'>
                <span>{text}</span>
                <img src='/sett.svg' alt='' />
              </div>
            ) : (
              <span>{text}</span>
            )}
          </span>
        ))}
      </div>
      <div className='grid md:gap-6 lg:gap-3 mb-16 gap-6 xl:gap-8 sm:gap-6  xsm:gap-2 xmd:gap-6 lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-4 sm:grid-cols-2 sm:grid-rows-4 xsm:grid-cols-1 xsm:grid-rows-8 mt-7 xl:px-32 lg:px-12 md:px-24 sm:px-6 xsm:px-10 xmd:px-20  px-4'>
        {placeData.map((data, idx) => (
          <Card key={idx} imgSrc={data} />
        ))}
      </div>
    </div>
  );
}

export default Place;
