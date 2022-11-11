import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function MobileNav({ showMenu, active }) {
  return (
    <div
      className={
        active
          ? "md:hidden flex-col flex items-center fixed inset-0 justify-center xsm:left-1/4 left-[12.7%] p-8 bg-white/10 backdrop-blur-lg gap-8"
          : "hidden"
      }
    >
      <div>
        <AiOutlineClose onClick={showMenu} className='cursor-pointer' />
      </div>
      <Link
        to='/'
        className="text-[#434343] font-normal text-xl font-['Red_Rose'] block"
      >
        Home
      </Link>
      <Link
        to='/place'
        className="text-[#434343] font-normal text-xl font-['Red_Rose'] block"
      >
        Place to stay
      </Link>
      <Link
        to=''
        className="text-[#434343] font-normal text-xl font-['Red_Rose'] block"
      >
        NFTs
      </Link>
      <Link
        to=''
        className="text-[#434343] font-normal text-xl font-['Red_Rose'] block"
      >
        Community
      </Link>

      <button className="font-medium  font-['Red_Rose'] text-base rounded-[10px] text-[white] bg-[#A02279] py-3 px-8 hover:bg-[#A02260]">
        Connect wallet
      </button>
    </div>
  );
}

export default MobileNav;
