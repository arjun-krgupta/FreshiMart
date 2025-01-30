import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

import fruit from "../assets/icon/fruit.png";
import vegi from "../assets/icon/vegi.png";
import grocery from "../assets/icon/grocery.png";
import leafy from "../assets/icon/leafy vegi.png";
import root from "../assets/icon/root vegi.png";
import marrow from "../assets/icon/marrow vegi.png";
import citrus from "../assets/icon/citrus.png";
import tropical from "../assets/icon/tropical.png";
import masala from "../assets/icon/masala.png";
import nuts from "../assets/icon/nuts.png";
import grains from "../assets/icon/grains.png";
import oil from "../assets/icon/oil.png";

function Filter({ onCategorySelect, onVarietySelect }) {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (value) => {
    setOpen(open === value ? null : value);
  };

  return (
    <div className="fixed top-[100px] md:top-[70px] left-0 w-full bg-white shadow-md z-50">
      {/* Horizontal Menu */}
      <div className="flex justify-center items-center gap-5 py-1 px-4 border-b">
        {/* Fruits Section */}
        <div className="relative">
          <button onClick={() => handleOpen(1)} className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded-lg">
            <img src={fruit} alt="Fruits" className="w-5 h-5" />
            <Typography className="font-medium">Fruits</Typography>
            <ChevronDownIcon className={`h-4 w-4 ms-5 transition-transform ${open === 1 ? "rotate-180" : ""}`} />
          </button>

          {open === 1 && (
            <div className="absolute left-0 w-[240px] bg-white shadow-lg rounded-md mt-2 p-1">
              <List className="text-sm">
                <ListItem onClick={() => onCategorySelect("Fruits")}>
                  <ListItemPrefix>
                    <img src={fruit} alt="Fruits" className="w-5 h-5" />
                  </ListItemPrefix>
                  All Fruits
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Citrus Fruits")}>
                  <ListItemPrefix>
                    <img src={citrus} alt="Citrus Fruits" className="w-5 h-5" />
                  </ListItemPrefix>
                  Citrus Fruits
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Tropical Fruits")}>
                  <ListItemPrefix>
                    <img src={tropical} alt="Tropical Fruits" className="w-5 h-5" />
                  </ListItemPrefix>
                  Tropical Fruits
                </ListItem>
              </List>
            </div>
          )}
        </div>

        {/* Vegetables Section */}
        <div className="relative">
          <button onClick={() => handleOpen(2)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
            <img src={vegi} alt="Vegetables" className="w-5 h-5" />
            <Typography className="font-medium">Vegetables</Typography>
            <ChevronDownIcon className={`h-4 w-4 ms-5 transition-transform ${open === 2 ? "rotate-180" : ""}`} />
          </button>

          {open === 2 && (
            <div className="absolute left-0 w-[250px] bg-white shadow-lg rounded-md mt-2 p-2">
              <List className="text-sm">
                <ListItem onClick={() => onCategorySelect("Vegetables")}>
                  <ListItemPrefix>
                    <img src={vegi} alt="Vegetables" className="w-5 h-5" />
                  </ListItemPrefix>
                  All Vegetables
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Leafy Green")}>
                  <ListItemPrefix>
                    <img src={leafy} alt="Leafy Green" className="w-5 h-5" />
                  </ListItemPrefix>
                  Leafy Green
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Root Vegi")}>
                  <ListItemPrefix>
                    <img src={root} alt="Root Vegi" className="w-5 h-5" />
                  </ListItemPrefix>
                  Root Vegetables
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Marrow Vegi")}>
                  <ListItemPrefix>
                    <img src={marrow} alt="Marrow Vegi" className="w-5 h-5" />
                  </ListItemPrefix>
                  Marrow Vegetables
                </ListItem>
              </List>
            </div>
          )}
        </div>

        {/* Grocery Section */}
        <div className="relative">
          <button onClick={() => handleOpen(3)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
            <img src={grocery} alt="Grocery" className="w-5 h-5" />
            <Typography className="font-medium">Grocery</Typography>
            <ChevronDownIcon className={`h-4 w-4 ms-5 transition-transform ${open === 3 ? "rotate-180" : ""}`} />
          </button>

          {open === 3 && (
            <div className="absolute left-0 right-0 w-[250px] bg-white shadow-lg rounded mt-2 p-1">
              <List className="text-sm">
                <ListItem onClick={() => onCategorySelect("Grocery")}>
                  <ListItemPrefix>
                    <img src={masala} alt="Masala" className="w-5 h-5" />
                  </ListItemPrefix>
                  All Grocery
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Grains")}>
                  <ListItemPrefix>
                    <img src={grains} alt="Grains" className="w-5 h-5" />
                  </ListItemPrefix>
                  Grains
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Nuts Seed")}>
                  <ListItemPrefix>
                    <img src={nuts} alt="Nuts & Seeds" className="w-5 h-5" />
                  </ListItemPrefix>
                  Nuts & Seeds
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Ghee Oil")}>
                  <ListItemPrefix>
                    <img src={oil} alt="Ghee & Oils" className="w-5 h-5" />
                  </ListItemPrefix>
                  Ghee & Oils
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Masala")}>
                  <ListItemPrefix>
                    <img src={nuts} alt="Nuts & Seeds" className="w-5 h-5" />
                  </ListItemPrefix>
                  Powder Masala
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Whole masala")}>
                  <ListItemPrefix>
                    <img src={nuts} alt="Nuts & Seeds" className="w-5 h-5" />
                  </ListItemPrefix>
                  Whole Masala
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Sugar Salt")}>
                  <ListItemPrefix>
                    <img src={nuts} alt="Nuts & Seeds" className="w-5 h-5" />
                  </ListItemPrefix>
                  Sugar & Salt
                </ListItem>
                <ListItem onClick={() => onVarietySelect("Dry Fruits")}>
                  <ListItemPrefix>
                    <img src={nuts} alt="Nuts & Seeds" className="w-5 h-5" />
                  </ListItemPrefix>
                  Dry Fruits
                </ListItem>
              </List>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
