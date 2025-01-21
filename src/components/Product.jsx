import React from "react";
import allData from "../constant/allData";

function Product() {
  return (
    <>
      {/* Product Page Wrapper */}
      <div className="p-4 md:py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {allData.map((val, ind) => (
            <div
              className="flex relative flex-col items-center py-2 px-3 bg-gray-100 w-full gap-3 rounded-md hover:transition-all hover:scale-[1.02]"
              key={ind}
            >
              <div className="w-32 pt-3">
                <p className="text-white bg-gradient-to-l from-[#9be15d] to-[#00e3ae] inline text-sm px-2 py-[2px] absolute top-0 left-0">
                  {val.offer}
                </p>
                <img src={val.img} alt="" className="w-full h-auto" />
              </div>
              <p className="text-base font-medium">{val.name}</p>
              <select
                name=""
                id=""
                className="w-full border border-gray-100 text-sm outline-none ps-2"
              >
                <option value="">1kg</option>
                <option value="">500g</option>
              </select>
              <div className="flex justify-between w-full items-center">
                <p className="text-sm font-medium">{val.new_price}</p>
                <button className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
