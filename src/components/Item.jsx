import React from "react";
import { dry_fruits, fruit, ghee_oil, grains, masala, nuts_Seeds, suger_salt, vegi, whole_masala } from "../constant/allData";
import { Link, useNavigate } from "react-router-dom";
import { addCart,removeCart,removeSingleItem } from '../redux/features/cartSlice';
import {useDispatch,useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

function Item(props) {
   const { cartItem } = useSelector((state) => state.allCart);
   const dispatch = useDispatch();
   const navigate=useNavigate()

   // Add item to cart
   const handleAddToCart = (val) => {
      dispatch(addCart(val));
      toast.success(`${val.name} added to cart`, {
        position: "top-center",
        autoClose: 1000,
      });
    };
     // add to cart
     const handleIncrement=(e)=>
     {
       dispatch(addCart(e))
     }
     // remove to cart
     const handleDecrement=(e)=>
     {
      dispatch(removeCart(e))
     }
     // remove single item 
     const handleSingleDecrement=(e)=>
     {
       dispatch(removeSingleItem(e))
     }
  
      // Component rendering
  const renderCategory = (categoryItems, categoryName) => (
    <div className="border p-2">
      <div className="flex justify-between px-3">
        <h1 className="text-lg font-semibold">{categoryName}</h1>
        <Link to={`/all${categoryName}`} className="text-sm hover:text-green-600">View all</Link>
      </div>
      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
        {
          categoryItems.map((val, ind) => {
            const cartItemData = cartItem.find((item) => item.id === val.id);
            const quantity = cartItemData?.qty || 0;
            const totalPrice = quantity * val.price || val.price;

            return (
              <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}
              >
                <div className="max-w-full w-auto h-[100px] p-3 cursor-pointer" onClick={() => navigate(`/allData/${val.id}`)} // Navigate to Product Details 
                >
                  <img src={val.img} alt={val.name} className="w-full h-full object-cover" />
                </div>
                <h1 className='text-sm'>{val.name}</h1>
                <span className='text-sm text-gray-500'>{val.qnty}</span>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-medium pe-8">₹{totalPrice}</h1>
                  {quantity > 0 ? (
                    <div className="flex items-center gap-2">
                      <button
                        className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                        onClick={cartItemData?.qty <= 1 ? () => handleDecrement(val.id) : () => handleSingleDecrement(val)}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="px-2 py-1 bg-green-500 text-white rounded text-sm"
                        onClick={() => handleIncrement(val)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
                      onClick={() => handleAddToCart(val)}
                    >
                      ADD
                    </button>
                  )}
                </div>  
              </div>
            );
          })
          
      }
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-white py-5 px-3 sm:px-10 md:px-16 lg:px-32">

        {/* Render all categories */}
        {renderCategory(fruit, "Fruit")}
        {renderCategory(vegi, "Vegetables")}
        {renderCategory(grains, "Grains")}
        {renderCategory(masala, "Powder-Masala")}
        {renderCategory(whole_masala, "Whole-Masala")}
        {renderCategory(nuts_Seeds, "Nuts-Seed")}
        {renderCategory(suger_salt, "Sugar-Salt")}
        {renderCategory(ghee_oil, "Ghee-Oil")}
        {renderCategory(dry_fruits, "Dry-Fruit")}
      </div>
      <ToastContainer />
    </>
  );

//   return (
//   <>
//   <div className="bg-white py-5 px-3 sm:px-10 md:px-16 lg:px-32">
//     {/* Fruits */}
//   <div className="border p-2">
//   <div className="flex justify-between px-3">
//      <h1 className="text-lg font-semibold">Fruits</h1>
//      <Link to="/allFruit" className="text-sm hover:text-green-600">View all</Link>
//      </div>
//      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
//      {fruit.map((val, ind) => {
//           const cartItemData = cartItem.find((item) => item.id === val.id);
//           const quantity = cartItemData?.qty || 0;
//           const totalPrice = quantity * val.price;
//          return (
//            <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
//          <div className="max-w-full w-auto h-[100px] p-3">
//           <img src={val.img} alt="" className="w-full h-full object-cover" />
//          </div>
//          <h1 className='text-sm'>{val.name}</h1>
//          <span className='text-sm text-gray-500'>{val.qnty}</span>
//              <div className="flex justify-between items-center ">
//                   <h1 className="text-sm font-medium pe-8">₹{totalPrice || val.price}</h1>
//                   {quantity > 0 ? (
//                   <div className="flex items-center gap-2">
//                     <button
//                       className="px-2 py-1 bg-red-500 text-white rounded text-sm"
//                       onClick={cartItemData.qty <= 1 ? () => handleDecrement(val.id) : () => handleSingleDecrement(val)}
//                     >
//                       -
//                     </button>
//                     <span>
//                     <span>{quantity}</span>
//                   </span>
//                     <button
//                       className="px-2 py-1 bg-green-500 text-white rounded text-sm"
//                       onClick={() => handleIncrement(val)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
//                     onClick={() => handleAddToCart(val)}
//                   >
//                     ADD
//                   </button>
//                 )}
                 
//                </div>  
//             </div>
//          )
//      })}
//      </div>
//   </div>

//    {/* Vegi */}
//    <div className="border p-2">
//   <div className="flex justify-between px-3">
//      <h1 className="text-lg font-semibold">Vegetables</h1>
//      <Link to="/allVegi" className="text-sm hover:text-green-600">View all</Link>
//      </div>
//      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
//      {vegi.map((val, ind) => {
//           const cartItemData = cartItem.find((item) => item.id === val.id);
//           const quantity = cartItemData?.qty || 0;
//           const totalPrice = quantity * val.price;
//          return (
//            <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
//          <div className="max-w-full w-auto h-[100px] p-3">
//           <img src={val.img} alt="" className="w-full h-full object-cover" />
//          </div>
//          <h1 className='text-sm'>{val.name}</h1>
//          <span className='text-sm text-gray-500'>{val.qnty}</span>
//              <div className="flex justify-between items-center ">
//                   <h1 className="text-sm font-medium pe-8">₹{totalPrice || val.price}</h1>
//                   {quantity > 0 ? (
//                   <div className="flex items-center gap-2">
//                     <button
//                       className="px-2 py-1 bg-red-500 text-white rounded text-sm"
//                       onClick={cartItemData.qty <= 1 ? () => handleDecrement(val.id) : () => handleSingleDecrement(val)}
//                     >
//                       -
//                     </button>
//                     <span>
//                     <span>{quantity}</span>
//                   </span>
//                     <button
//                       className="px-2 py-1 bg-green-500 text-white rounded text-sm"
//                       onClick={() => handleIncrement(val)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
//                     onClick={() => handleAddToCart(val)}
//                   >
//                     ADD
//                   </button>
//                 )}
                 
//                </div>  
//             </div>
//          )
//      })}
//      </div>
//   </div>

// {/* Grains */}
// <div className="border p-2">
//   <div className="flex justify-between px-3">
//      <h1 className="text-lg font-semibold">All Grains</h1>
//      <Link to="/allGrains" className="text-sm hover:text-green-600">View all</Link>
//      </div>
//      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
//      {grains.map((val, ind) => {
//           const cartItemData = cartItem.find((item) => item.id === val.id);
//           const quantity = cartItemData?.qty || 0;
//           const totalPrice = quantity * val.price;
//          return (
//            <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
//          <div className="max-w-full w-auto h-[100px] p-3">
//           <img src={val.img} alt="" className="w-full h-full object-cover" />
//          </div>
//          <h1 className='text-sm'>{val.name}</h1>
//          <span className='text-sm text-gray-500'>{val.qnty}</span>
//              <div className="flex justify-between items-center ">
//                   <h1 className="text-sm font-medium pe-8">₹{totalPrice || val.price}</h1>
//                   {quantity > 0 ? (
//                   <div className="flex items-center gap-2">
//                     <button
//                       className="px-2 py-1 bg-red-500 text-white rounded text-sm"
//                       onClick={cartItemData.qty <= 1 ? () => handleDecrement(val.id) : () => handleSingleDecrement(val)}
//                     >
//                       -
//                     </button>
//                     <span>
//                     <span>{quantity}</span>
//                   </span>
//                     <button
//                       className="px-2 py-1 bg-green-500 text-white rounded text-sm"
//                       onClick={() => handleIncrement(val)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
//                     onClick={() => handleAddToCart(val)}
//                   >
//                     ADD
//                   </button>
//                 )}
                 
//                </div>  
//             </div>
//          )
//      })}
//      </div>
//   </div>
//    {/* Powder Masala */}
//    <div className="border p-2">
//   <div className="flex justify-between px-3">
//      <h1 className="text-lg font-semibold">Powder Masala</h1>
//      <Link to="/allMasala" className="text-sm hover:text-green-600">View all</Link>
//      </div>
//      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
//      {masala.map((val, ind) => {
//           const cartItemData = cartItem.find((item) => item.id === val.id);
//           const quantity = cartItemData?.qty || 0;
//           const totalPrice = quantity * val.price;
//          return (
//            <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
//          <div className="max-w-full w-auto h-[100px] p-3">
//           <img src={val.img} alt="" className="w-full h-full object-cover" />
//          </div>
//          <h1 className='text-sm'>{val.name}</h1>
//          <span className='text-sm text-gray-500'>{val.qnty}</span>
//              <div className="flex justify-between items-center ">
//                   <h1 className="text-sm font-medium pe-8">₹{totalPrice || val.price}</h1>
//                   {quantity > 0 ? (
//                   <div className="flex items-center gap-2">
//                     <button
//                       className="px-2 py-1 bg-red-500 text-white rounded text-sm"
//                       onClick={cartItemData.qty <= 1 ? () => handleDecrement(val.id) : () => handleSingleDecrement(val)}
//                     >
//                       -
//                     </button>
//                     <span>
//                     <span>{quantity}</span>
//                   </span>
//                     <button
//                       className="px-2 py-1 bg-green-500 text-white rounded text-sm"
//                       onClick={() => handleIncrement(val)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
//                     onClick={() => handleAddToCart(val)}
//                   >
//                     ADD
//                   </button>
//                 )}
                 
//                </div>  
//             </div>
//          )
//      })}
//      </div>
//   </div>

//    {/* Dry Fruits */}
//    <div className="border p-2">
//   <div className="flex justify-between px-3">
//      <h1 className="text-lg font-semibold">Dry Fruits</h1>
//      <Link to="/allDry_Fruits" className="text-sm hover:text-green-600">View all</Link>
//      </div>
//      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
//      {dry_fruits.map((val, ind) => {
//           const cartItemData = cartItem.find((item) => item.id === val.id);
//           const quantity = cartItemData?.qty || 0;
//           const totalPrice = quantity * val.price;
//          return (
//            <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
//          <div className="max-w-full w-auto h-[100px] p-3">
//           <img src={val.img} alt="" className="w-full h-full object-cover" />
//          </div>
//          <h1 className='text-sm'>{val.name}</h1>
//          <span className='text-sm text-gray-500'>{val.qnty}</span>
//              <div className="flex justify-between items-center ">
//                   <h1 className="text-sm font-medium pe-8">₹{totalPrice || val.price}</h1>
//                   {quantity > 0 ? (
//                   <div className="flex items-center gap-2">
//                     <button
//                       className="px-2 py-1 bg-red-500 text-white rounded text-sm"
//                       onClick={cartItemData.qty <= 1 ? () => handleDecrement(val.id) : () => handleSingleDecrement(val)}
//                     >
//                       -
//                     </button>
//                     <span>
//                     <span>{quantity}</span>
//                   </span>
//                     <button
//                       className="px-2 py-1 bg-green-500 text-white rounded text-sm"
//                       onClick={() => handleIncrement(val)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
//                     onClick={() => handleAddToCart(val)}
//                   >
//                     ADD
//                   </button>
//                 )}
                 
//                </div>  
//             </div>
//          )
//      })}
//      </div>
//   </div>

//    {/* Ghee & Oil */}
//    <div className="border p-2">
//   <div className="flex justify-between px-3">
//      <h1 className="text-lg font-semibold">Ghee & Oil</h1>
//      <Link to="/allGhee_oil" className="text-sm hover:text-green-600">View all</Link>
//      </div>
//      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
//      {ghee_oil.map((val, ind) => {
//           const cartItemData = cartItem.find((item) => item.id === val.id);
//           const quantity = cartItemData?.qty || 0;
//           const totalPrice = quantity * val.price;
//          return (
//            <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
//          <div className="max-w-full w-auto h-[100px] p-3">
//           <img src={val.img} alt="" className="w-full h-full object-cover" />
//          </div>
//          <h1 className='text-sm'>{val.name}</h1>
//          <span className='text-sm text-gray-500'>{val.qnty}</span>
//              <div className="flex justify-between items-center ">
//                   <h1 className="text-sm font-medium pe-8">₹{totalPrice || val.price}</h1>
//                   {quantity > 0 ? (
//                   <div className="flex items-center gap-2">
//                     <button
//                       className="px-2 py-1 bg-red-500 text-white rounded text-sm"
//                       onClick={cartItemData.qty <= 1 ? () => handleDecrement(val.id) : () => handleSingleDecrement(val)}
//                     >
//                       -
//                     </button>
//                     <span>
//                     <span>{quantity}</span>
//                   </span>
//                     <button
//                       className="px-2 py-1 bg-green-500 text-white rounded text-sm"
//                       onClick={() => handleIncrement(val)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
//                     onClick={() => handleAddToCart(val)}
//                   >
//                     ADD
//                   </button>
//                 )}
                 
//                </div>  
//             </div>
//          )
//      })}
//      </div>
//   </div>

//    {/* whole Masala */}
//    <div className="border p-2">
//   <div className="flex justify-between px-3">
//      <h1 className="text-lg font-semibold">Whole Masala</h1>
//      <Link to="/allWhole_masala" className="text-sm hover:text-green-600">View all</Link>
//      </div>
//      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
//      {whole_masala.map((val, ind) => {
//           const cartItemData = cartItem.find((item) => item.id === val.id);
//           const quantity = cartItemData?.qty || 0;
//           const totalPrice = quantity * val.price;
//          return (
//            <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
//          <div className="max-w-full w-auto h-[100px] p-3">
//           <img src={val.img} alt="" className="w-full h-full object-cover" />
//          </div>
//          <h1 className='text-sm'>{val.name}</h1>
//          <span className='text-sm text-gray-500'>{val.qnty}</span>
//              <div className="flex justify-between items-center ">
//                   <h1 className="text-sm font-medium pe-8">₹{totalPrice || val.price}</h1>
//                   {quantity > 0 ? (
//                   <div className="flex items-center gap-2">
//                     <button
//                       className="px-2 py-1 bg-red-500 text-white rounded text-sm"
//                       onClick={cartItemData.qty <= 1 ? () => handleDecrement(val.id) : () => handleSingleDecrement(val)}
//                     >
//                       -
//                     </button>
//                     <span>
//                     <span>{quantity}</span>
//                   </span>
//                     <button
//                       className="px-2 py-1 bg-green-500 text-white rounded text-sm"
//                       onClick={() => handleIncrement(val)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
//                     onClick={() => handleAddToCart(val)}
//                   >
//                     ADD
//                   </button>
//                 )}
                 
//                </div>  
//             </div>
//          )
//      })}
//      </div>
//   </div>

//    {/* Sugar & Salt */}
//    <div className="border p-2">
//   <div className="flex justify-between px-3">
//      <h1 className="text-lg font-semibold">Sugar & Salt</h1>
//      <Link to="/allSugar_salt" className="text-sm hover:text-green-600">View all</Link>
//      </div>
//      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
//      {suger_salt.map((val, ind) => {
//           const cartItemData = cartItem.find((item) => item.id === val.id);
//           const quantity = cartItemData?.qty || 0;
//           const totalPrice = quantity * val.price;
//          return (
//            <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
//          <div className="max-w-full w-auto h-[100px] p-3">
//           <img src={val.img} alt="" className="w-full h-full object-cover" />
//          </div>
//          <h1 className='text-sm'>{val.name}</h1>
//          <span className='text-sm text-gray-500'>{val.qnty}</span>
//              <div className="flex justify-between items-center ">
//                   <h1 className="text-sm font-medium pe-8">₹{totalPrice || val.price}</h1>
//                   {quantity > 0 ? (
//                   <div className="flex items-center gap-2">
//                     <button
//                       className="px-2 py-1 bg-red-500 text-white rounded text-sm"
//                       onClick={cartItemData.qty <= 1 ? () => handleDecrement(val.id) : () => handleSingleDecrement(val)}
//                     >
//                       -
//                     </button>
//                     <span>
//                     <span>{quantity}</span>
//                   </span>
//                     <button
//                       className="px-2 py-1 bg-green-500 text-white rounded text-sm"
//                       onClick={() => handleIncrement(val)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
//                     onClick={() => handleAddToCart(val)}
//                   >
//                     ADD
//                   </button>
//                 )}
                 
//                </div>  
//             </div>
//          )
//      })}
//      </div>
//   </div>

//    {/* Nuts & Seeds */}
//    <div className="border p-2">
//   <div className="flex justify-between px-3">
//      <h1 className="text-lg font-semibold">Nuts & Seed</h1>
//      <Link to="/allNuts_seed" className="text-sm hover:text-green-600">View all</Link>
//      </div>
//      <div className="flex justify-start overflow-x-scroll webkit w-full gap-3 py-1">
//      {nuts_Seeds.map((val, ind) => {
//           const cartItemData = cartItem.find((item) => item.id === val.id);
//           const quantity = cartItemData?.qty || 0;
//           const totalPrice = quantity * val.price;
//          return (
//            <div className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[155px] sm:w-[180px]" key={ind}>
//          <div className="max-w-full w-auto h-[100px] p-3">
//           <img src={val.img} alt="" className="w-full h-full object-cover" />
//          </div>
//          <h1 className='text-sm'>{val.name}</h1>
//          <span className='text-sm text-gray-500'>{val.qnty}</span>
//              <div className="flex justify-between items-center ">
//                   <h1 className="text-sm font-medium pe-8">₹{totalPrice || val.price}</h1>
//                   {quantity > 0 ? (
//                   <div className="flex items-center gap-2">
//                     <button
//                       className="px-2 py-1 bg-red-500 text-white rounded text-sm"
//                       onClick={cartItemData.qty <= 1 ? () => handleDecrement(val.id) : () => handleSingleDecrement(val)}
//                     >
//                       -
//                     </button>
//                     <span>
//                     <span>{quantity}</span>
//                   </span>
//                     <button
//                       className="px-2 py-1 bg-green-500 text-white rounded text-sm"
//                       onClick={() => handleIncrement(val)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="px-6 py-1 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
//                     onClick={() => handleAddToCart(val)}
//                   >
//                     ADD
//                   </button>
//                 )}
                 
//                </div>  
//             </div>
//          )
//      })}
//      </div>
//   </div>
  
//   </div>
//   <ToastContainer position="top-center" autoClose={1000} hideProgressBar />
//   </>
//   )
}

export default Item;
