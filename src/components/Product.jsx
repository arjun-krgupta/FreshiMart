import React from "react";
import allData from "../constant/allData";

function Product({ selectedCategory, selectedVariety }) {

  const filteredData = allData.filter((item) => {
    if (selectedVariety) {
      return item.variety === selectedVariety;
    }
    if (selectedCategory) {
      return item.category === selectedCategory;
    }
    return true; // Show all items by default
  });
    
  return (
    <>
      {/* Product Page Wrapper */}
      <div className="p-4 md:py-5 px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
          {filteredData.map((val, ind) => (
            <div
              className="flex relative flex-col items-center py-2 px-3 bg-gray-100 w-full gap-3 rounded-md hover:transition-all hover:scale-[1.02]"
              key={ind}
            >
              <div className="max-w-full h-[110px] overflow-hidden w-auto pt-4">
                <p className="text-white bg-gradient-to-l from-[#9be15d] to-[#00e3ae] inline text-sm px-2 py-[2px] absolute top-0 left-0">
                  {val.offer}
                </p>
                <img src={val.img} alt="" className="w-auto h-full object-cover" />
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
                <p className="text-sm font-medium">{val.price}</p>
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
