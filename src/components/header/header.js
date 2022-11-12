import { Link } from "react-router-dom";
import MobileNav from "./mobile_nav";
import { useState } from "react";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./header.style.css";
import Modal from "../modal";

function Header() {
  const [active, setActive] = useState("nav_menu");
  const [togglerIcon, setTogglerIcon] = useState("navbar-toggler");
  const [openModal, setOpenModal] = useState(false);

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    // navbar toggler animation
    togglerIcon === "navbar-toggler"
      ? setTogglerIcon("navbar-toggler toggle")
      : setTogglerIcon("navbar-toggler");
  };

  return (
    <div
      className={
        "header sticky top-0 h-[15vh] z-50 w-full py-4 xl:px-32 lg:px-12  md:px-4  xsm:px-6 px-2 flex justify-between items-center bg-white"
      }
    >
      <div className='sm:w-[unset] xsm:w-[200px] w-[180px]'>
        <Link to='/'>
          <img src='/logo.svg' alt='' className='' />
        </Link>
      </div>
      <div className={active}>
        <div className=''>
          <div className=' links'>
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
        <div className=''>
          <button
            className="font-medium  font-['Red_Rose'] text-base rounded-[10px] text-[white] bg-[#A02279] py-3 px-6 hover:bg-[#97074f]"
            onClick={() => setOpenModal(true)}
          >
            Connect wallet
          </button>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className={togglerIcon} onClick={navToggle}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
      {/* <MobileNav showMenu={showMenu} active={active} /> */}
    </div>
  );
}

export default Header;
