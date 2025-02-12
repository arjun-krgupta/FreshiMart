import React from "react";
import { allData } from "../constant/allData";
import { useSearch } from "../context/SearchContext";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, removeSingleItem } from "../redux/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Product() {
  const { searchTerm } = useSearch();
  const { cartItem } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  // Filtered items based on search term
  const filteredItems = allData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add item to cart
  const handleAddToCart = (val) => {
    dispatch(addCart(val));
    toast.success(`${val.name} added to cart`, {
      position: "top-center",
      autoClose: 1000,
    });
  };

  // Increment item quantity
  const handleIncrement = (e) => {
    dispatch(addCart(e));
  };

  // Remove entire item from cart
  const handleDecrement = (e) => {
    dispatch(removeCart(e));
  };

  // Remove a single quantity of an item
  const handleSingleDecrement = (e) => {
    dispatch(removeSingleItem(e));
  };

  return (
    <>
      <div className="px-2 mt-5 md:px-10 lg:px-16 xl:px-36">
        {/* Product Grid */}
        <div className="flex justify-center gap-4 flex-wrap items-center xl:grid xl:grid-cols-5 xl:justify-items-center">
          {filteredItems.length > 0 ? (
            filteredItems.map((val, ind) => {
              const cartItemData = cartItem.find((item) => item.id === val.id);
              const quantity = cartItemData?.qty || 0;
              const totalPrice = quantity * val.price;

              return (
                <div
                  className="flex flex-col border rounded shadow-md p-2 items-center gap-2 w-[170px] sm:w-[195px]"
                  key={ind} 
                >
                  <div className="max-w-full w-auto h-[100px] p-3 cursor-pointer" onClick={() => navigate(`/allData/${val.id}`)} // Navigate to Product Details 
                  >
                    <img
                      src={val.img}
                      alt={val.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h1 className="text-sm">{val.name}</h1>
                  <span className="text-sm text-gray-500">{val.qnty}</span>
                  <div className="flex justify-between items-center ">
                    <h1 className="text-sm font-medium pe-7">
                      ₹{totalPrice || val.price}
                    </h1>

                    {quantity > 0 ? (
                      <div className="flex items-center gap-2">
                        <button
                          className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                          onClick={
                            cartItemData.qty <= 1
                              ? () => handleDecrement(val.id)
                              : () => handleSingleDecrement(val)
                          }
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
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar />
    </>
  );
}

export default Product;
