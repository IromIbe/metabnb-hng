import { Link } from "react-router-dom";
import MobileNav from "./mobile_nav";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./header.style.css";

function Header() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className='header sticky top-0 z-50 w-full py-4 xl:px-24 lg:px-12 md:px-4  xsm:px-6 px-2 flex justify-between items-center bg-white'>
      <div className='sm:w-[unset] xsm:w-[200px] w-[180px]'>
        <Link to='/'>
          <img src='/logo.svg' alt='' className='md:mr-6 lg:mr-0' />
        </Link>
      </div>
      <div className='md:hidden block'>
        <HiOutlineMenuAlt3 onClick={showMenu} className='scale-150' />
      </div>
      <div className='links md:flex justify-between items-center hidden'>
        <div className='md:flex justify-between items-center lg:gap-14 md:gap-4 sm:gap:2'>
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
        </div>
      </div>
      <div className='md:block hidden'>
        <button className="font-medium  font-['Red_Rose'] text-base rounded-[10px] text-[white] bg-[#A02279] py-3 px-8 hover:bg-[#97074f]">
          Connect wallet
        </button>
      </div>
      <MobileNav showMenu={showMenu} active={active} />
    </div>
  );
}

export default Header;
