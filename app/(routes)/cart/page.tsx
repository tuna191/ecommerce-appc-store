"use client"

import Container from "@/components/ui/Container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import Summary from "./components/Summary";


const CartPage = () => {

const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true);
  },[])

  const cart = useCart()

  if(!isMounted){
    return null;
  }
  return (
    <div className="bg-white">
        <Container >
            <div className="px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                <div className="mt-12 lg:grid-cols-12 lg:grid lg:items-start gap-x-12">
                    <div className="lg:col-span-7">
                        {cart.items.length === 0 && <p className="text-neutral-500">No Items In Cart</p>}
                        <ul>
                            {cart.items.map((item)=>(
                                <CartItem
                                    key={item.id}
                                    data={item}
                                />
                            ))}
                        </ul>
                    </div>
                    <Summary/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CartPage