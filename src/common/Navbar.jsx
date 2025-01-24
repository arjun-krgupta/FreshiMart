import { FaCartPlus } from "react-icons/fa6";
import { Badge } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  InboxIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import icon from "../assets/icon/icon.png";
import fruit from "../assets/icon/fruit.png";
import vegi from "../assets/icon/vegi.png";
import grocery from "../assets/icon/grocery.png";

function Navbar() {
  const redirect = useNavigate();
  const { cartItem } = useSelector((state) => state.allCart);
  const [menuOpen,setMenuOpen]=useState(false)
  const menuRef = useRef(null);
    const [open, setOpen] = useState(0);
  
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
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
      {/* Navbar */}
      <div className="flex flex-col gap-2 fixed top-0 left-0 w-full z-50 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] h-[100px] md:h-[70px] shadow-md">
        {/* Top Section */}
        <div className="flex justify-between items-center text-white mt-5 px-12 sm:px-16 lg:px-32">
           {/* Logo */}
                <div className="flex gap-5 sm:gap-4">
                <button onClick={toggleMenu} className="md:hidden">
                 { menuOpen ? <FaXmark className="text-2xl sm:text-3xl text-white" />
                 : <FaBarsStaggered className="text-2xl sm:text-3xl text-white"/>
                 }
                </button>
                <h1 className=" text-xl sm:text-2xl lg:text-3xl font-semibold uppercase cursor-pointer" onClick={()=>redirect('/')}>FreshiMart</h1>
                </div>

          {/* Desktop Search */}
          <input
            type="text"
            placeholder="Search ..."
            className="hidden md:flex outline-none border-white text-black text-sm rounded ps-4 md:w-[35%] py-2 placeholder:text-sm"
          />

          {/* Cart & Authentication */}
          <div className="flex gap-6 sm:gap-8 lg:gap-10 items-center text-sm sm:text-base uppercase font-medium">
            {/* Login */}
            <a href="/login">Login</a>

            {/* Profile */}
            <CgProfile className="text-[22px] text-white cursor-pointer" />

            {/* Cart */}
            <Badge
              content={cartItem.length}
              className="m-[-6px] sm:m-[-8px] bg-black"
            >
              <FaCartPlus
                className="text-[22px] cursor-pointer"
                onClick={() => redirect("/cart")}
              />
            </Badge>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-10 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search ..."
            className="flex md:hidden outline-none border-white text-black text-sm rounded ps-4 w-full sm:w-[85%] py-[7px] placeholder:text-sm"
          />
        </div>
           
           {/* mobile sidebar */}
        {
          menuOpen && 
        <div className="absolute left-0 top-[100px] md:hidden">
            <Card
        className="fixed top-[100px] md:top-[70px] left-0 h-full bg-white w-52 sm:w-64 md:w-72 lg:w-80 p-2 rounded-none shadow-lg border border-gray-200 z-50"
        ref={menuRef}           >
        {/* Brand Section */}

        {/* Sidebar Items */}
        <List>
          {/* Fruits Section */}
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <img src={fruit} alt="Fruits" className="w-5 h-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Fruits
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Citrus Juices
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Ready to Eat
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
         {/* Vegetables Section */}
           <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <img src={vegi} alt="Vegetables" className="w-5 h-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Vegetables
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Leafy Green
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Root Vegetables
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          {/* Grocery Section */}
          <Accordion
            open={open === 3}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 3 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <img src={grocery} alt="Grocery" className="w-5 h-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Grocery
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Whole Masala
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Grains
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          {/* Divider */}
          <hr className="my-2 border-blue-gray-50" />

          {/* Static Links */}
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem >
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
            </Card>
        </div>
        }
      </div>
    </>
  );
}

export default Navbar;
