import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./header.style.css";

function MobileNav({ showMenu, active }) {
  return (
    <div className=' mobile flex-col flex items-center fixed inset-0 justify-center md:left-[50%] sm:left-[25%] left-[12.5%]  p-8 bg-white/10 backdrop-blur-lg gap-8'>
      <div>
        <AiOutlineClose onClick={showMenu} className='cursor-pointer' />
      </div>
      <Link to='/' className=' link'>
        Home
      </Link>
      <Link to='/place' className=' link'>
        Place to stay
      </Link>
      <Link to='' className=' link'>
        NFTs
      </Link>
      <Link to='' className=' link'>
        Community
      </Link>

      <button className="font-medium  font-['Red_Rose'] text-base rounded-[10px] text-[white] bg-[#A02279] py-3 px-6 hover:bg-[#97074f]">
        Connect wallet
      </button>
    </div>
  );
}

export default MobileNav;
