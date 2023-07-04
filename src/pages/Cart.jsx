import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( ()=> {
    setTotalAmount( cart.reduce ( (acc,curr) => acc + curr.price, 0));
  }, [cart]);

  return (
      <div>
        {
          cart.length > 0 ?
          (<div className="flex flex-row max-w-6xl gap-x-8 mx-auto mt-10 flex-wrap mb-10 ">
            <div className="max-w-3xl">
              {
                cart.map( (item,index) => {
                  return <CartItem key = {item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="flex flex-col justify-between max-w-2xl mt-10">
              <div className="flex flex-col">
                <div className="text-green-600 font-bold">YOUR CART</div>
                <div className="text-4xl text-green-600 font-bold">SUMMARY</div>
                <p className="mt-2">
                  <span className="text-green-600 font-semibold">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="flex flex-col gap-y-2">
                <p className="text-black font-semibold">Total Amount : <span className="font-bold">${totalAmount}</span></p>
                <button className="bg-green-700 py-2 px-8 w-[350px] rounded-md text-white font-bold">
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>) :
          (
            <div>
              <h1>Your Cart Is Empty</h1>
              <Link to={"/"}>
                <button>
                  Shop Now
                </button>
              </Link>
            </div>
          )
        }
      </div>
  )
};

export default Cart;
