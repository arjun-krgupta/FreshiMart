import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Card, Typography, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart, removeSingleItem } from '../redux/features/cartSlice';

const TABLE_HEAD = ["Action", "Name", "Product", "Quantity", "Amount"];

function Cart() {
  const { cartItem } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    let price = 0, quantity = 0;
    cartItem.forEach(item => {
      price += item.price * item.qty;
      quantity += item.qty;
    });
    setTotalPrice(price);
    setTotalQty(quantity);
  }, [cartItem]);

  return (
    <div className='max-w-6xl mx-auto p-6 mt-3'>
      {/* Header */}
      <div className="w-full bg-gradient-to-l from-[#9be15d] to-[#00e3ae] text-white py-5 px-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>

      {cartItem.length > 0 ? (
        <Card className="overflow-auto shadow-lg rounded-lg">
          <table className="w-full min-w-max table-auto text-center border border-gray-200 rounded-lg">
            <thead className='bg-gray-100'>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th key={index} className="p-4 text-gray-700 text-md font-semibold">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cartItem.map((data, index) => (
                <tr key={index} className='border-b transition-all'>
                  <td className="p-4">
                    <MdDelete 
                      className='text-2xl mx-auto text-red-500 cursor-pointer hover:text-red-700 transition-all' 
                      onClick={() => dispatch(removeCart(data.id))} 
                    />
                  </td>
                  <td className="p-4 text-gray-800 font-medium">{data.name}</td>
                  <td className="p-4 flex justify-center h-24 w-24 mx-auto">
                    <img src={data.img} alt={data.name} className='h-auto w-full object-contain' />
                  </td>
                  <td className="p-4">
                    <div className='flex items-center gap-3 justify-center'>
                      <Button size='sm' variant='outlined' color="gray" onClick={() => data.qty <= 1 ? dispatch(removeCart(data.id)) : dispatch(removeSingleItem(data))}>
                        <FaMinus />
                      </Button>
                      <span className='px-4 py-1 border rounded text-sm font-semibold bg-gray-100'>{data.qty}</span>
                      <Button size='sm' variant='outlined' color="gray" onClick={() => dispatch(addCart(data))}>
                        <FaPlus />
                      </Button>
                    </div>
                  </td>
                  <td className="p-4 text-gray-800 font-semibold">₹{data.qty * data.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className='bg-gray-100'>
              <tr>
                <td colSpan={3} className="p-4 font-semibold text-gray-800 text-left pl-10">Total Quantity : {totalQty}</td>
                <td colSpan={2} className="p-4 font-semibold text-gray-800 text-right pe-20">Total Amount : ₹{totalPrice}</td>
              </tr>
            </tfoot>
          </table>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
          <FaShoppingCart className='text-5xl text-gray-500' />
          <h2 className='text-lg mt-2 text-gray-700'>Your Cart is Empty</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
