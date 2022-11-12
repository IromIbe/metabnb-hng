import React from "react";
import Card from "../card";

const homeData = [
  "/five.svg",
  "/six.svg",
  "/seven.svg",
  "/eight.svg",
  "/one.svg",
  "/two.svg",
  "/three.svg",
  "/four.svg",
];

function Homepage() {
  return (
    <div className=' md:pt-16 sm:pt-10 pt-6'>
      <div className='flex md:flex-row sm:mb-14 mb-4 flex-col-reverse justify-between items-center xl:px-20 lg:px-12 md:px-10  xsm:px-5 px-3'>
        <div className='text flex-[.5]'>
          <h1 className="md:text-[56px] sm:text-[40px] xsm:text-[30px] text-[29px] md:pt-0 pt-5  text-[#434343] font-['red_rose'] font-normal">
            Rent a <span className='text-[#A02279]'>Place</span> away from{" "}
            <span className='text-[#A02279]'>Home</span> in the{" "}
            <span className='text-[#A02279]'>Metaverse</span>
          </h1>
          <p className='sm:text-2xl text-xl text-[#434343] pt-4'>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className='mt-6  flex justify-start items-center h-[40px] xsm:w-[85%] sm:w-[75%] md:w-[70%] mb-8'>
            <input
              type='search'
              name='search'
              id=''
              placeholder='Search for location'
              className='border-[1px] border-[#A3A3A3] bg-[rgba(247_247_247_0.1)] w-[70%] px-2 h-[inherit] outline-0 rounded-tl-lg rounded-bl-lg'
            />
            <button className='bg-[#A02279] hover:bg-[#97074f] h-[inherit] flex justify-center items-center rounded-tr-lg rounded-br-lg sm:px-12 w-[30%] text-white text-base font-normal'>
              Search
            </button>
          </div>
        </div>
        <div className='illustration flex justify-center items-center flex-[.5]'>
          <img src='/nft-group.svg' alt='' />
        </div>
      </div>

      <div className='bg-[#A02279] height-[200px] w-full flex justify-around py-1'>
        <img
          src='/token.svg'
          alt=''
          className='md:w-[unset] w-[50px] xsm:w-[100px]'
        />
        <img
          src='/metamask.svg'
          alt=''
          className='md:w-[unset] w-[50px] xsm:w-[100px]'
        />
        <img
          src='/opensea.svg'
          alt=''
          className='md:w-[unset] w-[50px] xsm:w-[100px]'
        />
      </div>
      <div className='sm:mt-12 mt-5 mb-14'>
        <h3 className=' font-[700] md:text-[40px] lg:text-5xl sm:text-[34px] xsm:text-[30px] text-[24px] text-center text-black'>
          Inspiration for your next adventure
        </h3>
        <div className='grid md:gap-4 lg:gap-3  gap-6 xl:gap-8 sm:gap-6  xsm:gap-2  md:grid-cols-4 md:grid-rows-2 xsm:grid-cols-2 xsm:grid-rows-4 mt-12 xl:px-20 lg:px-12 md:px-10  xsm:px-6  px-4'>
          {homeData.map((data, idx) => (
            <Card key={idx} imgSrc={data} />
          ))}
        </div>
      </div>
      <div className='metabnb py-12 bg-[#A02279] border-black flex sm:flex-row  flex-col-reverse justify-between items-center xl:px-20 lg:px-12 md:px-10  xsm:px-5 px-3 '>
        <div className='lg:flex-[.28] md:flex-[.5]'>
          <h1 className='md:text-[43px] sm:text-[35px] xsm:text-[30px] font-bold text-[29px] md:pt-0 pt-5 text-white'>
            Metabnb NFTs
          </h1>
          <p className='text-white text-[13px] font-normal leading-[29px]'>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className='bg-white text-[#A02279] font-normal text-base py-2 px-5 mt-5 rounded-lg'>
            Learn more
          </button>
        </div>
        <div className='md:flex-[.5] flex justify-center items-center '>
          <img
            src='/metabnb.svg'
            alt=''
            className=' md:w-[550px] sm:w-[750px]  w-[250px]'
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
