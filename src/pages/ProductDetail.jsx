import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  removeCart,
  removeSingleItem,
} from "../redux/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { allData } from "../constant/allData";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = allData.find((item) => item.id.toString() === id);
  const { cartItem } = useSelector((state) => state.allCart);

  if (!product) {
    return (
      <h1 className="text-center text-xl mt-10 text-red-500">Product Not Found</h1>
    );
  }

  const name = product.name || "No Name";
  const qnty = product.qnty || "N/A";
  const price = product.price || 0;
  const offer = product.offer || "No Offer";
  const description = product.description || "No description available.";
  const brand = product.brand || "Generic";
  const rating = product.rating || 4.5;
  const reviews = product.reviews || 100;
  const type = product.type || "General";

 const images =
  product.images?.length >= 3
    ? product.images.slice(0, 3)
    : [product.img, product.img, product.img];

  const cartProduct = cartItem.find((item) => item.id === product.id);
  const quantity = cartProduct?.qty || 0;
  const totalPrice = quantity * price;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleAddToCart = () => {
    dispatch(addCart(product));
    toast.success(`${name} added to cart`);
  };

  const handleIncrement = () => dispatch(addCart(product));
  const handleDecrement = () => dispatch(removeCart(product.id));
  const handleSingleDecrement = () => dispatch(removeSingleItem(product));

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:justify-center gap-6 mt-5 px-4 lg:px-24">
        {/* Left Section - Images + Buttons */}
        <div className="flex items-start lg:w-[50%] gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col items-start gap-2">
            {images.map((img, index) => (
              <div className="w-16 h-16 border rounded" key={index}>
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full object-contain p-1 cursor-pointer ${
                    selectedImageIndex === index
                      ? "border-2 border-green-500"
                      : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
          </div>

         <div className="flex w-full flex-col gap-3">
           {/* Main Image */}
          <Card className="w-full h-[350px] flex justify-center items-center border rounded-none p-4">
            <CardHeader className="shadow-none ring-0 bg-transparent">
              <img
                src={images[selectedImageIndex]}
                alt={name}
                className="h-full w-auto object-contain"
              />
            </CardHeader>
          </Card>

          {/* Action Buttons below image */}
          <div className="flex gap-3 w-full justify-center mt-3">
            <Button
              variant="gradient"
              className="bg-gradient-to-l from-[#9be15d] to-[#00e3ae] w-1/2"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
            <Button
              className="bg-yellow-800 w-1/2"
              onClick={() => {
                navigate("/buyNow", { state: { product } });
              }}
            >
              BUY NOW
            </Button>
          </div>
         </div>

        </div>

        {/* Right Section - Product Info */}
        <Card className="w-full lg:w-[50%] p-4 shadow-none ring-0">
          <CardBody>
            <Typography variant="h3" className="font-bold text-gray-900">
              {name}
            </Typography>
            <Typography className="text-gray-600 text-sm mt-1">
              {qnty}
            </Typography>

            <div className="flex items-center gap-4 mt-2">
              <Typography variant="h5" className="font-semibold text-black">
                ₹{totalPrice || price}
              </Typography>
              {offer && (
                <Typography variant="small" className="text-green-600 font-medium">
                  {offer}
                </Typography>
              )}
            </div>

            {/* Description */}
            <Typography className="text-gray-700 mt-4 leading-relaxed text-justify">
              {description}
            </Typography>

            {/* Extra Details */}
            <div className="mt-4 text-sm text-gray-800 space-y-2">
              <p><strong>Category:</strong> {type}</p>
              <p><strong>Brand:</strong> {brand}</p>
              <p><strong>Availability:</strong> In Stock</p>
              <p><strong>Rating:</strong> ⭐ {rating} / 5</p>
              <p><strong>Reviews:</strong> {reviews} Customer Reviews</p>
              <p><strong>Delivery:</strong> Estimated in 3–5 days</p>
            </div>

            {/* Quantity Controls if in Cart */}
            {quantity > 0 && (
              <div className="mt-6">
                <div className="flex items-center gap-4">
                  <Button
                    color="red"
                    variant="gradient"
                    size="sm"
                    onClick={
                      quantity <= 1 ? handleDecrement : handleSingleDecrement
                    }
                  >
                    -
                  </Button>
                  <Typography variant="h5">{quantity}</Typography>
                  <Button
                    color="green"
                    variant="gradient"
                    size="sm"
                    onClick={handleIncrement}
                  >
                    +
                  </Button>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>

      <ToastContainer position="top-center" autoClose={1000} hideProgressBar />
    </>
  );
}

export default ProductDetail;
