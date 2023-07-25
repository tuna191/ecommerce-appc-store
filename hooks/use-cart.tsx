import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

import { Product } from '@/types';
import { AlertTriangle } from 'lucide-react';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
// create là một hàm từ thư viện zustand để tạo store (nguồn lưu trữ) và các hàm trạng thái. Nó nhận vào một function callback với hai tham số set và get, trong đó:

// set: Một hàm để thay đổi trạng thái của store.
// get: Một hàm để truy cập trạng thái hiện tại của store.
// persist là một middleware từ zustand/middleware dùng để lưu trữ trạng thái vào local storage để giữ lại dữ liệu khi refresh trang. Nó cần nhận vào một function callback trả về object chứa các hàm trạng thái.
  persist<CartStore>((set, get) => ({
  items: [],
  addItem: (data: Product) => {
    // kiểm tra xem sản phẩm đã tồn tại hay chưa
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === data.id);
    
    if (existingItem) {
      return toast('Item already in cart.');
    }

    set({ items: [...get().items, data] });
    toast.success('Item added to cart.');
  },
  removeItem: (id: string) => {
    set({ items: [...get().items.filter((item) => item.id !== id)] });
    toast.success('Item removed from cart.');
  },
  removeAll: () => set({ items: [] }),
}), {
  name: 'cart-storage',
  storage: createJSONStorage(() => localStorage)
}));

export default useCart;