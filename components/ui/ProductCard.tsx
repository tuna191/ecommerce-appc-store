"use client"

import { Product } from '@/types';
import Image from 'next/image';
import React, { MouseEventHandler } from 'react'
import IconButton from './IconButton';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './Currency';
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/use-preview-modals';

interface ProductCardProps{
    data: Product
}
const ProductCard = ({data}:ProductCardProps) => {
  
  const previewModal = usePreviewModal()
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    // event.stopPropagation() là một phương thức của đối tượng sự kiện (event) trong JavaScript. 
    // Khi được gọi, nó ngăn chặn sự kiện hiện tại lan ra các phần tử cha hoặc con khác trong DOM. 
    // Điều này ngăn chặn sự kiện nổi bọt (bubbling) hoặc sự kiện sảy ra nhiều lần (event propagation).
    
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  return (
    <div onClick={handleClick} className='bg-white group cursor-pointer rounderd-xl border p-3 space-y-4 '>
        <div className='aspect-square rounded-xl bg-gray-100 relative'>
            <Image
                src={data?.images?.[0].url}
                alt='Image'
                fill
                className='aspect-square object-cover rounded-md'
            />
            <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                <div className='flex gap-x-6 justify-center '>
                    <IconButton
                      onClick={onPreview}
                      icon={<Expand size={20} className='text-gray-600'/>}
                    />
                    <IconButton
                      onClick={()=> {}}
                      icon={<ShoppingCart size={20} className='text-gray-600'/>}
                    />
                </div>
            </div>
        </div>
        {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard