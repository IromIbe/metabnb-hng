import React from "react";

function Card({ imgSrc, key }) {
  return (
    <div
      className='border-[1px] border-[#D7D7D7] flex  flex-col rounded-[15px] bg-[linear-gradient(124.4deg_#FFFFFF_10.8%_#FFFFFF_87.34%)] p-4'
      key={key}
    >
      <div className='flex justify-center items-center'>
        <img src={imgSrc} alt='' />
      </div>
      <div className='flex xsm:flex-row flex-col justify-evenly items-start lg:gap-2 mt-3'>
        <div>
          <span className='text-[12px] text-[#434343] font-normal block'>
            Desert king
          </span>
          <span className='text-[12px] text-[#434343] font-normal block'>
            2345km away
          </span>
          <img src='/star.svg' alt='' />
        </div>
        <div className='flex justify-center  xsm:items-end items-start flex-col'>
          <span className='text-[12px] text-[#434343] font-bold block'>
            1MBT per night
          </span>
          <span className='text-[12px] text-[#434343] font-normal block'>
            available for 2weeks stay
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
