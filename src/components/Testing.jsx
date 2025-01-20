import React, { useState,useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Badge } from "@material-tailwind/react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

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
       <h1 className=" text-xl sm:text-2xl lg:text-3xl font-semibold uppercase cursor-pointer" onClick={()=>redirect('/')}>FreshiMart</h1>
       </div>

        {/* dextop Menu */}
            <div className="hidden md:flex gap-5 lg:gap-8 items-center text-base font-medium uppercase ">
            <a href="/">Home</a>
            <Menu>
                <MenuHandler>
                  <Button className="flex gap-2 items-center bg-green-800 outline-none border-0 shadow-none px-2 text-sm">Category <FaArrowDown /></Button>
                </MenuHandler>
                <MenuList className="bg-green-800 text-white">
                  <MenuItem>Fruit</MenuItem>
                  <MenuItem>Vegetable</MenuItem>
                  <MenuItem>Grocery</MenuItem>
                </MenuList>
            </Menu>
            <a href="/shop">Shop</a> 
            <a href="/contact">Contact</a>
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
        <div className="absolute left-0 top-[70px] z-10 md:hidden">
          <div className="h-[100vh] w-[150px] pt-5 uppercase flex text-base flex-col gap-4 text-white bg-black px-2 " 
              ref={menuRef} >
            <a href="/" className="hover:bg-green-800 ps-4 py-1 rounded">Home</a>
            <a href="/fruit" className="hover:bg-green-800 ps-4 py-1 rounded">Fruit</a>
            <a href="/vegi" className="hover:bg-green-800 ps-4 py-1 rounded">Vegetable</a>
            <a href="/grocery" className="hover:bg-green-800 ps-4 py-1 rounded">Grocery</a>
            <a href="/shop" className="hover:bg-green-800 ps-4 py-1 rounded">Shop Now</a>
          </div>
       </div>
       }

      </div>
    </>
  );
}


import React from 'react';
import front from '../assets/background.jpg'
import { useNavigate } from 'react-router-dom';
import Service from './Service';
import Slider from './Slider'

function Home(props) {
  const redirect=useNavigate()
    return (
      <>
      {/* Hero section */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center mt-4 md:mt-24 px-5 lg:px-12">
        <div className="flex flex-col justify-start items-start gap-3 sm:gap-5 w-full md:w-[56%] lg:w-[59%]">
           <div className='font-bold flex flex-col gap-1 lg:gap-2 text-5xl md:text-[45px] lg:text-6xl'>
              <span> Welcome to </span>
              <span>FreshiMart Shop</span>
           </div>
            <p className='text-base md:text-lg font-medium w-full'>Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.
            Fruit normally means the seed-associated fleshy structures (or produce) of plants that typically are sweet or sour and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries.</p>
            <button onClick={()=>redirect('/shop')} className='bg-black text-white outline-none border-0 px-5 py-3 uppercase text-lg font-medium'>Shop Now</button>
        </div>
        <div className="w-[75%] md:w-[42%] lg:w-[40%]">
            <img src={front} alt="" className='w-full h-auto'/>
        </div>
    </div> 
    <Slider/>
    <Service/>
      </>
    );
}

