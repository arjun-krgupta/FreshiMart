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

const PlaceOrder = () => {
  const { cartItem } = useSelector((state) => state.allCart);
  const navigate = useNavigate();

  const totalPrice = cartItem.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 pt-24 flex flex-col items-center">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Product Summary */}
        <div className="space-y-6">
          <Typography variant="h4" className="font-bold text-gray-900">
            Order Summary
          </Typography>

          {cartItem.map((item) => (
            <Card key={item.id} className="flex gap-4 items-center p-4 shadow-sm">
              <CardHeader floated={false} className="w-24 h-24 bg-white shadow-none">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </CardHeader>
              <CardBody className="p-0">
                <Typography variant="h6" className="text-gray-800">
                  {item.name}
                </Typography>
                <Typography variant="small" className="text-gray-500">
                  Quantity: {item.qty}
                </Typography>
                <Typography variant="small" className="text-gray-500">
                  Price: ₹{item.price} | Offer: {item.offer || "N/A"}
                </Typography>
                <Typography variant="small" className="text-yellow-600">
                  Ratings: ⭐ {item.rating || "4.5"} | Reviews: {item.reviews || "120"}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Right: Address & Total */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
          <Typography variant="h5" className="font-semibold text-gray-900">
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

          <div className="border-t pt-4 flex justify-between text-lg font-bold text-gray-800">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <Button
            color="green"
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
