import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, removeSingleItem } from "../redux/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { allData } from "../constant/allData";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Find the product from allData
  const product = allData.find((item) => item.id.toString() === id);

  // Get the cart items from Redux store
  const { cartItem } = useSelector((state) => state.allCart);

  if (!product) {
    return <h1 className="text-center text-xl mt-10">Product Not Found</h1>;
  }

  // Find the product in the cart to get quantity
  const cartProduct = cartItem.find((item) => item.id === product.id);
  const quantity = cartProduct?.qty || 0;
  const totalPrice = quantity * product.price;

  // Add product to cart
  const handleAddToCart = (product) => {
    dispatch(addCart(product));
    toast.success(`${product.name} added to cart`, {
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
      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-5 justify-center sm:gap-10 mt-10 w-full px-5">
        {/* Product Image */}
        <div className=" h-[60%] max-w-full sm:h-[200px] md:h-[220px] lg:h-[250px] border rounded shadow-lg w-auto">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover p-5"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-3 w-[90%] sm:w-[45%]">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <h2 className="text-gray-400 text-base">{product.qnty}</h2>

          {/* Price & Offer */}
          <div className="flex gap-3 items-center">
            <span className="text-lg font-medium"> ₹{totalPrice || product.price}</span>
            <span className="text-sm text-[#00e3ae]">{product.offer}</span>
          </div>

          {/* Product Description */}
          <p className="text-sm text-justify">{product.description}</p>

          {/* Cart Controls */}
          {quantity > 0 ? (
            <div className="flex items-center gap-2">
              {/* Decrease Quantity */}
              <button
                className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                onClick={cartProduct.qty<=1 ? ()=>handleDecrement(product.id) : ()=>handleSingleDecrement(product)}
              >
                -
              </button>

              {/* Show Quantity */}
              <span>{quantity}</span>

              {/* Increase Quantity */}
              <button
                className="px-2 py-1 bg-green-500 text-white rounded text-sm"
                onClick={() => handleIncrement(product)}
              >
                +
              </button>
            </div>
          ) : (
            // Add to Cart Button
            <button
              className="px-6 py-1 bg-gradient-to-l w-[150px] from-[#9be15d] to-[#00e3ae] border outline-none rounded text-sm"
              onClick={() => handleAddToCart(product)}
            >
              ADD
            </button>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar />
    </>
  );
}

export default ProductDetail;
