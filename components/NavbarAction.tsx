"use client"
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarAction = () => {

// Chúng ta sử dụng state isMounted với giá trị khởi tạo là false bằng cách sử dụng useState(false). 
// State này được sử dụng để kiểm tra xem component đã mount (được render lần đầu tiên) hay chưa.
// Sử dụng useEffect để thiết lập giá trị của isMounted thành true sau khi component đã mount. 
// useEffect nhận vào một hàm callback và một mảng dependency trống [], điều này đảm bảo rằng hàm callback chỉ được chạy một lần khi component mount. 
// Khi hàm callback được chạy, setMounted(true) được gọi để cập nhật giá trị của isMounted thành true.
// Tiếp theo, chúng ta kiểm tra nếu isMounted là false (component chưa mount), thì return null. 
// Điều này đảm bảo rằng khi component chưa mount, không có gì được render.
// Nếu isMounted là true, component đã mount, thì chúng ta trả về phần HTML và UI của component.
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true);
  },[])

  const router = useRouter()
  const cart = useCart()
  if(!isMounted){
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
        <Button onClick={()=> router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
            <ShoppingBag
              size={20}
              color="white"
            />
            <span className="ml-2 text-sm font-medium text-white">
              {cart.items.length}
            </span>
        </Button>
    </div>
  )
  
};

export default NavbarAction;
