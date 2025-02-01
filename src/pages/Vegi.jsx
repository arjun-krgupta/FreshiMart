import React from 'react';
import { allVegi } from '../constant/allData';

function Vegi(props) {
    return (
        <>
    <div className="bg-white p-3 mt-2 px-20">
    {/* Vegi */}
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 px-16">
     {
      allVegi.map((val,ind)=>
      <div className="flex flex-col border rounded shadow-md p-3 items-center gap-2 w-[185px]" key={ind}>
         <div className="max-w-full w-auto h-[100px] p-4">
          <img src={val.img} alt="" className="w-full h-full object-cover" />
         </div>
         <h1 className="text-sm font-medium">{val.price}</h1>
         <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">ADD</button>
      </div>
      )
     }
     </div>
  </div>
        </>
    );
}

export default Vegi;