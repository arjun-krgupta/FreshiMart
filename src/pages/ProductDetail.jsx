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
  const product = allData.find((item) => item.id.toString() === id);

  const { cartItem } = useSelector((state) => state.allCart);

  if (!product) {
    return (
      <h1 className="text-center text-xl mt-10 text-red-500">
        Product Not Found
      </h1>
    );
  }

  const name = product.name || "No Name Available";
  const qnty = product.qnty || "N/A";
  const price = product.price || 0;
  const offer = product.offer || "No Offer";
  const description = product.description || "No description available.";

  // Ensure at least 3 images are available
  const images =
    product.images?.length >= 3
      ? product.images.slice(0, 3)
      : [product.img, product.img, product.img];

  const cartProduct = cartItem.find((item) => item.id === product.id);
  const quantity = cartProduct?.qty || 0;
  const totalPrice = quantity * price;

  // State for selected image (use index instead of object reference)
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

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:justify-center lg:gap-2 mt-5 px-2 lg:px-24 xl:px-32">
        {/* Left Section - Product Images */}
        <div className="flex lg:w-[50%] gap-1 mx-auto">
          {/* Small Thumbnails */}
          <div className="flex flex-col gap-2 p-1">
            {images.map((img, index) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20" key={index}>
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`h-full w-full object-contain p-2 border rounded cursor-pointer transition-all duration-300 ${
                    selectedImageIndex === index
                      ? "border-[#9be15d]"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <Card className="w-[240px] h-[260px] overflow-x-auto webkit sm:w-[300px] sm:h-[350px] flex justify-center border shadow-none ring-0 p-4">
            <CardHeader className="h-auto w-full flex justify-center mx-auto items-center shadow-none ring-0 bg-transparent">
              <img
                src={images[selectedImageIndex]}
                alt={name}
                className="h-full w-auto object-contain"
              />
            </CardHeader>
          </Card>
        </div>

        {/* Right Section - Product Details */}
        <Card className="w-full px-3 sm:px-4 md:px-20 py-2 lg:p-2 lg:border shadow-none ring-0">
          <hr className="block bg-gray-100 w-full lg:hidden" />
          <CardBody>
            <Typography variant="h3" className="font-bold text-gray-900">
              {name}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-gray-600 text-sm mt-1"
            >
              {qnty}
            </Typography>

            {/* Price & Offer */}
            <div className="flex items-center gap-4 mt-3">
              <Typography variant="h5" className="font-semibold text-black">
                ₹{totalPrice || price}
              </Typography>
              {offer && (
                <Typography
                  variant="small"
                  className="text-green-500 font-semibold"
                >
                  {offer}
                </Typography>
              )}
            </div>

            {/* Product Description */}
            <Typography
              variant="paragraph"
              className="text-gray-700 mt-4 pe-0 lg:pe-5 text-justify leading-relaxed"
            >
              {description}
            </Typography>

            {/* Cart Controls */}
            <div className="flex items-center mt-6">
              {quantity > 0 ? (
                <div className="flex items-center gap-4">
                  <Button
                    color="red"
                    variant="gradient"
                    size="sm"
                    className="px-4"
                    onClick={
                      quantity <= 1 ? handleDecrement : handleSingleDecrement
                    }
                  >
                    -
                  </Button>

                  <Typography variant="h5" className="font-medium">
                    {quantity}
                  </Typography>

                  <Button
                    color="green"
                    variant="gradient"
                    size="sm"
                    className="px-4"
                    onClick={handleIncrement}
                  >
                    +
                  </Button>
                </div>
              ) : (
                <div className="flex gap-3 w-full mx-3 px-3 lg:px-1">
                  <Button
                    variant="gradient"
                    className="w-full mt-4 bg-gradient-to-l from-[#9be15d] to-[#00e3ae] text-sm"
                    onClick={handleAddToCart}
                  >
                    ADD TO CART
                  </Button>
                
                  <Button
                    className="w-full mt-4 bg-yellow-800 text-sm"
                    onClick={() => navigate("/placeOrder")}
                  >
                    PLACE ORDER
                  </Button>
                </div>
 )}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar />
    </>
  );
}

export default ProductDetail;
