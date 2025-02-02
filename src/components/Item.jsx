import React from "react";
import { dry_fruits, fruit, ghee_oil, grains, masala, nuts_Seeds, suger_salt, vegi, whole_masala } from "../constant/allData";
import { Link } from "react-router-dom";

function Item(props) {
  return (
  <>
  <div className="bg-white py-3 mt-2 px-3 sm:px-10 md:px-16 lg:px-32">
    {/* Fruits */}
  <div className="border p-2">
  <div className="flex justify-between px-3">
     <h1 className="text-lg font-semibold">Fruits</h1>
     <Link to="/allFruit" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 py-1">
     {
      fruit.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
         <div className="max-w-full w-auto h-[100px] p-3">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className='text-sm'>{val.name}</h1>
         <span className='text-sm text-gray-500'>{val.qnty}</span>
             <div className="flex justify-between items-center ">
                  <h1 className="text-sm font-medium pe-8">{val.price}</h1>
                  <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
               </div>
      </div>
      )
     }
     </div>
  </div>
   {/* Vegi */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-3">
     <h1 className="text-lg font-semibold">Vegetables</h1>
     <Link to="/allVegi" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 py-1">
     {
      vegi.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
         <div className="max-w-full w-auto h-[100px] p-3">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className='text-sm'>{val.name}</h1>
         <span className='text-sm text-gray-500'>{val.qnty}</span>
             <div className="flex justify-between items-center ">
                  <h1 className="text-sm font-medium pe-8">{val.price}</h1>
                  <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
               </div>
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
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 py-1">
     {
      grains.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
         <div className="max-w-full w-auto h-[100px] p-1 ">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className='text-sm'>{val.name}</h1>
         <span className='text-sm text-gray-500'>{val.qnty}</span>
             <div className="flex justify-between items-center ">
                  <h1 className="text-sm font-medium pe-8">{val.price}</h1>
                  <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
               </div>
      </div>
      )
     }
     </div>
  </div>
   {/* Powder Masala */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-3">
     <h1 className="text-lg font-semibold">Powder Masala</h1>
     <Link to="/allMasala" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 py-1">
     {
      masala.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
         <div className="max-w-full w-auto h-[100px] p-1">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className='text-sm'>{val.name}</h1>
         <span className='text-sm text-gray-500'>{val.qnty}</span>
             <div className="flex justify-between items-center ">
                  <h1 className="text-sm font-medium pe-8">{val.price}</h1>
                  <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
               </div>
      </div>
      )
     }
     </div>
  </div>
   {/* Dry Fruits */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-3">
     <h1 className="text-lg font-semibold">Dry Fruits</h1>
     <Link to="/allDry_Fruits" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 py-1">
     {
      dry_fruits.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
         <div className="max-w-full w-auto h-[100px] p-1">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className='text-sm'>{val.name}</h1>
         <span className='text-sm text-gray-500'>{val.qnty}</span>
             <div className="flex justify-between items-center ">
                  <h1 className="text-sm font-medium pe-8">{val.price}</h1>
                  <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
               </div>
      </div>
      )
     }
     </div>
  </div>
   {/* Ghee & Oil */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-3">
     <h1 className="text-lg font-semibold">Ghee & Oils</h1>
     <Link to="/allGhee_oil" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 py-1">
     {
      ghee_oil.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
         <div className="max-w-full w-auto h-[100px] p-2">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className='text-sm'>{val.name}</h1>
         <span className='text-sm text-gray-500'>{val.qnty}</span>
             <div className="flex justify-between items-center ">
                  <h1 className="text-sm font-medium pe-8">{val.price}</h1>
                  <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
               </div>
      </div>
      )
     }
     </div>
  </div>
   {/* whole Masala */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-3">
     <h1 className="text-lg font-semibold">Whole Masala</h1>
     <Link to="/allWhole_masala" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 py-1">
     {
      whole_masala.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
         <div className="max-w-full w-auto h-[100px] p-1">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className='text-sm'>{val.name}</h1>
         <span className='text-sm text-gray-500'>{val.qnty}</span>
             <div className="flex justify-between items-center ">
                  <h1 className="text-sm font-medium pe-8">{val.price}</h1>
                  <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
               </div>
      </div>
      )
     }
     </div>
  </div>
   {/* Sugar & Salt */}
   <div className="border p-2 mt-3">
  <div className="flex justify-between px-3">
     <h1 className="text-lg font-semibold">Sugar & Salt</h1>
     <Link to="/allSugar_salt" className="text-sm hover:text-green-600">View all</Link>
     </div>
     <div className="flex lg:justify-center overflow-x-scroll webkit w-full gap-3 py-1">
     {
      suger_salt.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
         <div className="max-w-full w-auto h-[100px] p-1">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className='text-sm'>{val.name}</h1>
         <span className='text-sm text-gray-500'>{val.qnty}</span>
             <div className="flex justify-between items-center ">
                  <h1 className="text-sm font-medium pe-8">{val.price}</h1>
                  <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
               </div>
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
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
         <div className="max-w-full w-auto h-[100px] p-1">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className='text-sm'>{val.name}</h1>
         <span className='text-sm text-gray-500'>{val.qnty}</span>
             <div className="flex justify-between items-center ">
                  <h1 className="text-sm font-medium pe-8">{val.price}</h1>
                  <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
               </div>
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
