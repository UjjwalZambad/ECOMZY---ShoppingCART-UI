import React from "react";
import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";

const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (
    <div className="flex gap-x-10 border-b-4 p-5 gap-3 ml-5">

      <div className="h-[200px] w-[600px] ml-5">
        <img src={item.image}  className="h-full w-full"/>
      </div>
      <div className="flex flex-col gap-y-3  ">
        <h1 className=" font-semibold text-xl ">{item.title}</h1>
        <h1 className="text-sm mt-5 text-gray-500 font-semibold ">{item.description}</h1>
        <div className="flex justify-between p-4">
          <p className="font-bold text-green-500">${item.price}</p>
          <div
          className="bg-red-200 rounded-full p-2"
          onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
