import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    pincode:"",
    state:"",
    locality:"",
    address: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      alert("Order placed successfully!");
      navigate("/");
    }, 1000);
  };

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        No product data found. Please go back and try again.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Delivery Address Form */}
        <div className="bg-white p-6 rounded shadow space-y-5">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Delivery Address</h2>
          <form onSubmit={handleSubmit} className="space-y-3 text-gray-900 text-sm">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border px-4 py-2 outline-none"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 outline-none"
              required
            />
              <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full border px-4 py-2 outline-none"
              required
            />
              <input
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className="w-full border px-4 py-2 outline-none"
              required
            />
              <input
              type="text"
              name="locality"
              placeholder="Locality"
              value={form.locality}
              onChange={handleChange}
              className="w-full border px-4 py-2 outline-none"
              required
            />
            <textarea
              name="address"
              placeholder="Complete Address"
              value={form.address}
              onChange={handleChange}
              rows={4}
              className="w-full border px-4 py-2 outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white text-lg py-2 rounded hover:bg-green-700"
            >
              Deliver Here
            </button>
            {success && (
              <p className="text-green-600 font-medium text-sm pt-2">
                Order submitted successfully!
              </p>
            )}
          </form>
        </div>

       {/* Right: Price Summary */}
<div className="bg-white p-6 rounded shadow space-y-5">
  <h2 className="text-xl font-bold text-gray-800 mb-4">Price Details</h2>

  <div className="space-y-3 text-sm text-gray-700">
    {/* Product image and name */}
    <div className="flex items-center gap-3">
      <img
        src={product.img || product.coverImage}
        alt={product.name}
        className="w-16 h-16 object-contain border rounded"
      />
      <div>
        <p className="font-medium">{product.name}</p>
        <p className="text-xs text-gray-500">{product.type || "Product"}</p>
      </div>
    </div>

    {/* Price breakdown */}
    <div className="pt-4 border-t space-y-2">
      <div className="flex justify-between">
        <span>Item Price</span>
        <span>₹{product.price}</span>
      </div>
      <div className="flex justify-between">
        <span>Protect + Promise Fee</span>
        <span>₹49</span>
      </div>
      <hr />
      <div className="flex justify-between font-bold text-[17px] text-gray-900">
        <span>Total Payable</span>
        <span>₹{product.price + 49}</span>
      </div>
    </div>

    <div className="text-xs text-gray-400 pt-2">
      *Inclusive of all taxes. Protect+ ensures safe delivery & buyer support.
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default BuyNow;
