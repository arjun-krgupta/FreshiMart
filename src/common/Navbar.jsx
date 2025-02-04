import { FaCartPlus } from "react-icons/fa6";
import { Badge } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaFirstOrder } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoGiftSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import slider1 from '../assets/slider 1.png'
import slider2 from '../assets/slider 2.png'
import slider3 from '../assets/slider 3.png'
import slider4 from '../assets/slider 4.png'
import { FaLocationCrosshairs } from "react-icons/fa6";

function Navbar() {
  const redirect = useNavigate();
  const { cartItem } = useSelector((state) => state.allCart);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearh = () => {
    setSearchOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <div className={`flex flex-col gap-2 fixed top-0 left-0 w-full z-50 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] transition-all duration-300`}
        style={{ height: searchOpen ? "100px" : "70px" }} >
        {/* Top Section */}
        <div className="flex justify-between items-center text-white mt-5 px-6 sm:px-10 md:px-20 lg:px-32">
          {/* Logo */}
          <div className="flex gap-6 items-center md:w-[65%] lg:w-[60%]">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold uppercase cursor-pointer" onClick={() => redirect('/')}>
              FreshiMart
            </h1>
            {/* Desktop Search */}
            <div className="hidden md:flex md:justify-between items-center bg-white px-2 w-full rounded">
              <input type="text" placeholder="Search Products" className="outline-none border-0 text-black text-sm py-2 w-full ps-2 placeholder:text-sm" />
              <IoSearch className="text-gray-600 text-[25px]" />
            </div>
          </div>

          {/* Cart & Authentication */}
          <div className="flex gap-3 sm:gap-6 lg:gap-10 items-center text-sm sm:text-base font-medium md:w-[30%] lg:w-[28%]">
            <IoSearch className="block md:hidden text-white text-[24px] cursor-pointer" onClick={handleSearh} />
            {/* location */}
              <Menu>
                <MenuHandler>
                <div className="flex gap-1 items-center cursor-pointer">
                    <ImLocation2 className="text-[25px] text-white" />
                    <h1 className="text-white hidden sm:block">110096</h1>
                </div>
                </MenuHandler>
                <MenuList className="mt-3">
                  <div className="flex flex-col items-center gap-1 border-0 outline-none ">
                    <h1 className="text-base text-black">Where do you want the delivery?</h1>
                    <p className="text-xs text-black">Grocery is available in selected cities</p>
                      <div className="flex text-sm items-center border border-black px-3 mt-2">
                         <input type="text" value={110096} className="border-0 outline-none w-20"  />
                          <div className="flex gap-1 items-center border-l border-black py-2 px-2">
                              <FaLocationCrosshairs className="text-lg text-blue-500" />
                              <span className="text-sm text-black">Current Location</span>
                          </div>
                      </div>
                  </div>
                  </MenuList>
              </Menu>

            
            <div className="flex gap-2">
              {/* Profile */}
              <Menu>
                <MenuHandler>
                  <span>
                    <CgProfile className="text-[22px] text-white cursor-pointer" />
                  </span>
                </MenuHandler>
                <MenuList className="text-black mt-3 ms-3">
                  <MenuItem className="flex items-center gap-2">
                    <CgProfile className="text-[19px] text-black cursor-pointer" />
                    <Typography variant="small" className="font-medium">My Profile</Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <FaFirstOrder className="text-[19px] text-black cursor-pointer" />
                    <Typography variant="small" className="font-medium">Orders</Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <MdFavoriteBorder className="text-[22px] text-black cursor-pointer" />
                    <Typography variant="small" className="font-medium">Wishlists</Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <IoMdNotifications className="text-xl text-black cursor-pointer" />
                    <Typography variant="small" className="font-medium">Notifications</Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <IoGiftSharp className="text-xl text-black cursor-pointer" />
                    <Typography variant="small" className="font-medium">Gift Cards</Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <LuLogOut className="text-xl text-black cursor-pointer" />
                    <Typography variant="small" className="font-medium">Logout</Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* Login */}
              <Link to="/login">Login</Link>
            </div>
            {/* Cart */}
            <Badge content={cartItem.length} className="m-[-4px] bg-black">
              <FaCartPlus className="text-[22px] cursor-pointer" onClick={() => redirect("/cart")} />
            </Badge>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="px-5 sm:px-10 ">
            <div className="px-2 md:hidden flex justify-center items-center bg-white rounded">
              <input type="text" placeholder="Search Products" className="outline-none border-0 text-black text-sm py-2 w-full ps-2 placeholder:text-sm" />
              <IoSearch className="text-gray-600 text-[25px]" onClick={handleSearh} />
            </div>
          </div>
        )}
      </div>

      {/* SLider */}
      <Marquee pauseOnHover>
        <div className={`grid grid-cols-4 gap-1 sm:gap-5 lg:gap-7 mt-2 w-full`}  style={{ paddingTop: searchOpen ? "98px" : "68px" }} >
            <div className="w-full">
            <img src={slider1} alt="" className='w-full h-[90px] sm:h-[120px] lg:h-[140px]' />
            </div>
            <div className="w-full">
            <img src={slider2} alt="" className='w-full h-[90px] sm:h-[120px] lg:h-[140px]' />
            </div>
            <div className="w-full">
            <img src={slider3} alt="" className='w-full h-[90px] sm:h-[120px] lg:h-[140px]' />
            </div>
            <div className="w-full">
            <img src={slider4} alt="" className='w-full h-[90px] pe-1 sm:pe-5 sm:h-[120px] lg:h-[140px]' />
            </div>
            </div>
        </Marquee>
    </>
  );
}

export default Navbar;
