import React from 'react';
import { allNuts_seed } from '../constant/allData';

function Nuts_Seed(props) {
    return (
       <>
        <div className="p-4 md:px-16 lg:px-24">
         {/* Nuts & Seeds */}
         <div className="flex justify-center gap-5 flex-wrap items-center">
         {
            allNuts_seed.map((val,ind)=>
            <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[170px] sm:w-[195px]" key={ind}>
               <div className="max-w-full w-auto h-[100px] p-1">
               <img src={val.img} alt="" className="w-full h-full object-cover" />
               </div>
               <h1 className='text-sm'>{val.name}</h1>
                 <span className='text-sm text-gray-500'>{val.qnty}</span>
               <div className="flex justify-between items-center ">
                  <h1 className="text-sm font-medium pe-7">{val.price}</h1>
                  <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
               </div>
            </div>
            )
         }
         </div>
      </div>
       
       </>
    );
}

export default Nuts_Seed;