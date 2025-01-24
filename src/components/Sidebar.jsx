import React, { useState } from "react";
import {Card,Typography,List,ListItem,ListItemPrefix,ListItemSuffix,Chip,Accordion,AccordionHeader,AccordionBody,} from "@material-tailwind/react";
import {ChevronDownIcon,} from "@heroicons/react/24/outline";
import {InboxIcon, UserCircleIcon,Cog6ToothIcon,PowerIcon,} from "@heroicons/react/24/solid";
import icon from "../assets/icon/icon.png";
import fruit from "../assets/icon/fruit.png";
import vegi from "../assets/icon/vegi.png";
import grocery from "../assets/icon/grocery.png";
import leafy from '../assets/icon/leafy vegi.png'
import root from '../assets/icon/root vegi.png'
import marrow from '../assets/icon/marrow vegi.png'
import citrus from '../assets/icon/citrus.png'
import tropical from '../assets/icon/tropical.png'
import masala from '../assets/icon/masala.png'
import nuts from '../assets/icon/nuts.png'
import grains from '../assets/icon/grains.png'
import oil from '../assets/icon/oil.png'
import { useNavigate } from "react-router-dom";

function Sidebar({ onCategorySelect, onVarietySelect }) {
  const [open, setOpen] = useState(0);
  const redirect=useNavigate()

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category); // Notify parent component about the selected category
  };

  const handleVarietyClick = (variety) => {
    onVarietySelect(variety); // Notify parent component about the selected variety
  };

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <Card
        className=" hidden md:block fixed top-[100px] md:top-[70px] left-0 h-full bg-white w-52 sm:w-64 md:w-72 p-2 rounded-none shadow-lg border border-gray-200 z-50"
      >
        {/* Brand Section */}
        {/* <div className="mb-4 flex items-center gap-4 p-2">
          <img src={icon} alt="brand" className="h-8 w-8" />
          <Typography
            variant="h5"
            color="blue-gray"
            className="uppercase font-bold"
           >
            Freshimart
          </Typography>
        </div> */}

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
                <Typography color="blue-gray" className="mr-auto font-normal" onClick={() => handleCategoryClick("Fruits")}>
                  Fruits
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0 text-sm">
                <ListItem onClick={() => handleVarietyClick("Citrus Fruits")}>
                  <ListItemPrefix>
                    <img src={citrus} alt="citrus Fruits" className="w-5 h-5" />
                  </ListItemPrefix>
                  Citrus Fruits
                </ListItem>
                <ListItem onClick={() => handleVarietyClick("Tropical Fruits")}>
                  <ListItemPrefix>
                    <img src={tropical} alt="tropical fruits" className="w-5 h-5" />
                  </ListItemPrefix>
                  Tropical Fruits
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
                <Typography color="blue-gray" className="mr-auto font-normal" onClick={() => handleCategoryClick("Vegetables")}>
                  Vegetables
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0 text-sm">
                <ListItem onClick={() => handleVarietyClick("Leafy Green")}>
                  <ListItemPrefix>
                    <img src={leafy} alt="" className="w-5 h-5" />
                  </ListItemPrefix>
                  Leafy Green
                </ListItem>
                <ListItem onClick={() => handleVarietyClick("Root Vegi")}>
                  <ListItemPrefix>
                    <img src={root} alt="" className="w-5 h-5" />
                  </ListItemPrefix>
                  Root Vegetables
                </ListItem>
                <ListItem onClick={() => handleVarietyClick("Marrow Vegi")}>
                  <ListItemPrefix>
                    <img src={marrow} alt="" className="w-5 h-5" />
                  </ListItemPrefix>
                  Marrow Vegetables
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
              <List className="p-0 text-sm">
                <ListItem>
                  <ListItemPrefix>
                    <img src={masala} alt="" className="w-5 h-5" />
                  </ListItemPrefix>
                  Masala
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                  <img src={grains} alt="" className="w-5 h-5" />
                  </ListItemPrefix>
                  Grains
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                  <img src={nuts} alt="" className="w-5 h-5" />
                  </ListItemPrefix>
                  Nuts & Seeds
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                  <img src={oil} alt="" className="w-5 h-5" />
                  </ListItemPrefix>
                  Oils
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
  );
}

export default Sidebar;
