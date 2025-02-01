import React from "react";
import { dry_fruits, fruit, ghee_oil, grains, masala, nuts_Seeds, suger_salt, vegi, whole_masala } from "../constant/allData";
import { Link } from "react-router-dom";

function Item(props) {
  return (
  <>
  <div className="bg-white p-3 mt-2 px-20">
    {/* Fruits */}
  <div className="border p-2">
  <div className="flex justify-between px-4">
     <h1 className="text-lg font-semibold">Fruits</h1>
     <Link to="/allFruit" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-4 lg:gap-4 py-1">
     {
      fruit.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[185px]" key={ind}>
         <div className="max-w-full w-auto h-[120px] p-4">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className="text-sm font-medium">{val.price}</h1>
         <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
      </div>
      )
     }
     </div>
  </div>
   {/* Vegi */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-4">
     <h1 className="text-lg font-semibold">Vegetables</h1>
     <Link to="/allVegi" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-4 lg:gap-4 py-1">
     {
      vegi.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[185px]" key={ind}>
         <div className="max-w-full w-auto h-[120px] p-5">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className="text-sm font-medium">{val.price}</h1>
         <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
      </div>
      )
     }
     </div>
  </div>
{/* Grains */}
<div className="border p-2 mt-3">
  <div className="flex justify-between px-4">
     <h1 className="text-lg font-semibold">All Grains</h1>
     <Link to="/allGrains" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-4 lg:gap-4 py-1">
     {
      grains.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[185px]" key={ind}>
         <div className="max-w-full w-auto h-[120px] p-1 ">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className="text-sm font-medium">{val.price}</h1>
         <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
      </div>
      )
     }
     </div>
  </div>
   {/* Powder Masala */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-4">
     <h1 className="text-lg font-semibold">Powder Masala</h1>
     <Link to="/allMasala" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-4 lg:gap-4 py-1">
     {
      masala.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[185px]" key={ind}>
         <div className="max-w-full w-auto h-[120px] p-1">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className="text-sm font-medium">{val.price}</h1>
         <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
      </div>
      )
     }
     </div>
  </div>
   {/* Dry Fruits */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-4">
     <h1 className="text-lg font-semibold">Dry Fruits</h1>
     <Link to="/allDry_Fruits" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-4 lg:gap-4 py-1">
     {
      dry_fruits.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[185px]" key={ind}>
         <div className="max-w-full w-auto h-[120px] p-1">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className="text-sm font-medium">{val.price}</h1>
         <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
      </div>
      )
     }
     </div>
  </div>
   {/* Ghee & Oil */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-4">
     <h1 className="text-lg font-semibold">Ghee & Oils</h1>
     <Link to="/allGhee_oil" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-4 lg:gap-4 py-1">
     {
      ghee_oil.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[185px]" key={ind}>
         <div className="max-w-full w-auto h-[120px] p-2">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className="text-sm font-medium">{val.price}</h1>
         <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
      </div>
      )
     }
     </div>
  </div>
   {/* whole Masala */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-4">
     <h1 className="text-lg font-semibold">Whole Masala</h1>
     <Link to="/allWhole_masala" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-4 lg:gap-4 py-1">
     {
      whole_masala.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[185px]" key={ind}>
         <div className="max-w-full w-auto h-[120px] p-1">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className="text-sm font-medium">{val.price}</h1>
         <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
      </div>
      )
     }
     </div>
  </div>
   {/* Sugar & Salt */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-4">
     <h1 className="text-lg font-semibold">Sugar & Salt</h1>
     <Link to="/allSugar_salt" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-4 lg:gap-4 py-1">
     {
      suger_salt.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[185px]" key={ind}>
         <div className="max-w-full w-auto h-[120px] p-1">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className="text-sm font-medium">{val.price}</h1>
         <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
      </div>
      )
     }
     </div>
  </div>
   {/* Nuts & Seeds */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-4">
     <h1 className="text-lg font-semibold">Nuts & Seeds</h1>
     <Link to="/allNuts_seed" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-4 lg:gap-4 py-1">
     {
      nuts_Seeds.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[185px]" key={ind}>
         <div className="max-w-full w-auto h-[120px] p-1">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className="text-sm font-medium">{val.price}</h1>
         <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
      </div>
      )
     }
     </div>
  </div>
  
  </div>
 
  </>
  )
}

export default Item;
