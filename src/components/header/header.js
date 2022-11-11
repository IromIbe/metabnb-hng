import { Link } from "react-router-dom";
import MobileNav from "./mobile_nav";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
function Header() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className='header sticky top-0 z-50 w-full py-6 lg:px-24 md:px-10  xsm:px-6 px-2 flex justify-between items-center '>
      <div>
        <img src='/logo.svg' alt='' className='md:mr-6 lg:mr-0' />
      </div>
      <div className='md:hidden block'>
        <HiOutlineMenuAlt3 onClick={showMenu} className='scale-150' />
      </div>
      <div className='links md:flex justify-between items-center hidden'>
        <div className='md:flex justify-between items-center lg:gap-14 md:gap-4 sm:gap:2'>
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
        </div>
      </div>
      <div className='md:block hidden'>
        <button className="font-medium  font-['Red_Rose'] text-base rounded-[10px] text-[white] bg-[#A02279] py-3 px-8 hover:bg-[#A02260]">
          Connect wallet
        </button>
      </div>
      <MobileNav showMenu={showMenu} active={active} />
    </div>
  );
}

export default Header;
