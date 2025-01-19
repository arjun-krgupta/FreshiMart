import React, { useState,useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Badge } from "@material-tailwind/react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const redirect=useNavigate()
  const {cartItem}=useSelector((state)=>state.allCart)
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuOpen,setMenuOpen]=useState(false)
  const menuRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu=()=>
  {
    setMenuOpen(!menuOpen)
  }

 // Close the menu when clicking outside
 useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Add event listener to detect clicks outside the menu
  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    // Clean up event listener
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <>
      <div className=" flex justify-between items-center bg-green-800 text-white h-[70px] px-5 sm:px-6 lg:px-16">
        {/* Logo */}
       <div className="flex gap-3 sm:gap-4">
       <button onClick={toggleMenu} className="md:hidden">
        { menuOpen ? <FaXmark className="text-2xl sm:text-3xl text-white" />
        : <FaBarsStaggered className="text-2xl sm:text-3xl text-white"/>
        }
       </button>
       <h1 className=" text-xl sm:text-2xl lg:text-3xl font-semibold uppercase cursor-pointer" onClick={()=>redirect('/')}>VegiFruit</h1>
       </div>

        {/* dextop Menu */}
            <div className="hidden md:flex gap-5 lg:gap-8 items-center text-base font-medium uppercase">
            <a href="/">Home</a>
            <a href="/fruit">Fruit</a>
            <a href="/vegi">Vegetable</a>
            <a href="/about">Shop</a>
          </div>

        {/* Cart & Authentication */}
        <div className="flex gap-4 sm:gap-6 items-center text-[13px] sm:text-base uppercase font-medium">
          {/* Search */}
          <div className="flex items-center">
          <FaSearch
              className="text-lg sm:text-xl cursor-pointer"
              onClick={toggleSearch}
            />
            {isSearchOpen && (
              <input
                type="text"
                className="absolute top-[72px] right-4 sm:right-2 ps-3 py-2 rounded text-white bg-green-800 focus:outline-none focus:ring-1 focus:ring-green-800 transition-all duration-200 w-[94%] 
                sm:w-[280px] text-sm placeholder:text-sm placeholder:text-white"
                placeholder="Search..."
              />
            )}
          </div>

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

        {/* Mobile menu */}
       {
        menuOpen && 
        <div className="absolute left-0 top-[70px]  z-10 md:hidden">
          <div className="h-[100vh] w-[150px] ps-5 pt-5 uppercase flex flex-col gap-5 text-white bg-black" 
              ref={menuRef} >
            <a href="/">Home</a>
            <a href="/fruit">Fruit</a>
            <a href="/vegi">Vegetable</a>
            <a href="/about">Shop Now</a>
          </div>
       </div>
       }

      </div>
    </>
  );
}

export default Navbar;
