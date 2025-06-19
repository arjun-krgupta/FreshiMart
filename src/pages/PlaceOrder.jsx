import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const PlaceOrder = () => {
  const { cartItem } = useSelector((state) => state.allCart);
  const navigate = useNavigate();
  useEffect(() => {
  if (cartItem.length === 0) {
    navigate("/");
  }
}, [cartItem, navigate]);

  const totalPrice = cartItem.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 pt-12 flex flex-col items-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left: Product Summary */}
        <div className="grid col-span-1 lg:col-span-2">
          <Typography variant="h4" className="font-bold text-gray-900">
            Order Summary
          </Typography>

          {cartItem.map((item) => (
            <Card key={item.id} className="flex gap-4 mt-4 items-center py-1 shadow-sm">
              <CardHeader floated={false} className="w-40 h-40 bg-white shadow-none">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </CardHeader>
              <CardBody className="flex flex-col gap-y-3">
                <Typography variant="h4" className="text-gray-900">
                  {item.name}
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  Quantity: {item.qty}
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  Price: ₹{item.price} | Offer: {item.offer || "N/A"}
                </Typography>
                <Typography variant="small" className="text-green-600">
                  Ratings: ⭐ {item.rating || "4.5"} | Reviews: {item.reviews || "120"}
                </Typography>
                 <Typography variant="h6" className="text-gray-800">
                  Description :
                </Typography>
                 <Typography variant="small" className="text-gray-600">
                   {item.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Right: Address & Total */}
        <div className="bg-white p-3 px-6 rounded-xl shadow-sm space-y-4">
          <Typography variant="h6" className="font-semibold text-gray-900">
            Delivery Address
          </Typography>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md px-4 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-md px-4 py-2 text-sm"
            />
            <textarea
              placeholder="Complete Address"
              rows={4}
              className="w-full border rounded-md px-4 py-2 text-sm"
            ></textarea>
          </div>

          <div className="border-t pt-4 flex justify-between text-md font-bold text-gray-800">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <Button
            className="bg-gradient-to-l from-[#9be15d] to-[#00e3ae]"
            size="lg"
            fullWidth
            onClick={() => alert("Order Placed Successfully!")}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
