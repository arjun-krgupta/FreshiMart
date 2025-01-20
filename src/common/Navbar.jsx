
import { FaCartPlus } from "react-icons/fa6";
import { Badge } from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const redirect=useNavigate()
  const {cartItem}=useSelector((state)=>state.allCart)

  return (
    <>
     <div className="flex flex-col gap-3 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] h-[100px] md:h-[70px] ">
        <div className=" flex justify-between items-center text-white mt-4 px-6 sm:px-10 lg:px-32">
            {/* Logo */}
          <h1 className=" text-xl sm:text-2xl lg:text-3xl font-semibold uppercase cursor-pointer" onClick={()=>redirect('/')}>FreshiMart</h1>
              {/* dextop Search */}
              <input type="text" placeholder="search ..." className="hidden md:flex outline-none border-white text-black text-sm rounded ps-4 
              md:w-[35%] py-[5px] placeholder:text-sm" />
            {/* Cart & Authentication */}
            <div className="flex gap-4 sm:gap-7 lg:gap-8 items-center text-[13px] sm:text-base uppercase font-medium">
              {/* profile */}
              <CgProfile className="text-xl text-white cursor-pointer" />
              {/* Cart */}
              <Badge content={cartItem.length} className="m-[-6px] sm:m-[-8px] bg-black" >
                <FaCartPlus className="text-lg sm:text-xl cursor-pointer" onClick={()=>redirect('/cart')} />
              </Badge>

              {/* Login & Sign Up */}
              <a href="/login" className="hover:text-green-400 transition">
                Login
              </a>
              <a href="/signup" className="hover:text-green-400 transition">
                Sign Up
              </a>
            </div>
          </div>
          {/* mobile Search */}
          <div className="px-10 flex justify-center items-center">
          <input type="text" placeholder="search ..." className="flex md:hidden outline-none border-white text-black text-sm rounded ps-4 w-full sm:w-[85%] py-[6px] placeholder:text-sm " />
          </div>

     </div>
    </>
  );
}

export default Navbar;
