import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import "./header.style.css";
import Modal from "../modal";

function Header() {
  const [active, setActive] = useState("nav_menu");
  const [togglerIcon, setTogglerIcon] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    // toggle mobile nav icon
    setTogglerIcon(!togglerIcon);
  };

  return (
    <div
      className={
        "header sticky top-0 h-[94px] z-50 w-full py-4 xl:px-32 lg:px-12  md:px-4  xsm:px-6 px-2 flex justify-between items-center bg-white"
      }
    >
      <div className='sm:w-[unset] xsm:w-[200px] w-[180px]'>
        <Link to='/'>
          <img src='/logo.webp' alt='' className='' />
        </Link>
      </div>
      <div className={active}>
        <div className=''>
          <div className=' links'>
            <Link to='/' className=' link'>
              Home
            </Link>
            <Link to='/place' className=' link whitespace-nowrap'>
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
            className="font-medium whitespace-nowrap font-['Red_Rose'] text-base rounded-[10px] text-[white] bg-[#A02279] py-3 px-6 hover:bg-[#97074f]"
            onClick={() => setOpenModal(true)}
          >
            Connect wallet
          </button>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className='navbar-toggler' onClick={navToggle}>
        {togglerIcon === true ? <GrClose /> : <HiOutlineMenuAlt3 />}
      </div>
    </div>
  );
}

export default Header;
