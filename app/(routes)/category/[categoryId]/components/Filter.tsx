"use client"
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Color, Size } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import React from 'react'

interface FilterProps{
    data: (Size|Color)[];
    name: string;
    valueKey: string;
}
const Filter: React.FC<FilterProps> =({
  data,
  name,
  valueKey
}) => {

  const searchParams = useSearchParams();
  const router = useRouter()

  //Lấy các tham số hiện tại của URL: Hàm bắt đầu bằng cách lấy các tham số hiện tại của URL, 
  //sử dụng hook useSearchParams.
  // ví dụ URL hiện tại: http://example.com/?colorId=1b2b215e-5bec-428b-b4ec-b4b0bf3f0542&sizeId=1b2b215e-5bec-428b-b4ec-b4b0bf3f05
  // selectedValue sẽ lấy đc sizeId=medium
  const selectedValue = searchParams.get(valueKey)

  const onClick = (id:string)=>{
    // ví dụ: const searchParams = colorId=1b2b215e-5bec-428b-b4ec-b4b0bf3f0542&sizeId=1b2b215e-5bec-428b-b4ec-b4b0bf3f05;
    // kết quả {
    //   colorId: 1b2b215e-5bec-428b-b4ec-b4b0bf3f0542,
    //   sizeId: 1b2b215e-5bec-428b-b4ec-b4b0bf3f05
    //  }
    const current = queryString.parse(searchParams.toString())

    const query={
      ...current,
      [valueKey]:id
    }
    if (current [valueKey] === id) {
      query[valueKey] = null;
      }
//queryString.stringifyUrl là một hàm trong thư viện query-string cho phép bạn tạo một URL từ một đối tượng chứa các tham số truy vấn.
      const url = queryString.stringifyUrl({
      url: window.location.href, 
      query
      }, { skipNull: true });
     // { skipNull: true }: 
      // Đây là một tùy chọn để xác định liệu liệu null có nên được bỏ qua khi tạo URL hay không. 
      // Nếu thiết lập { skipNull: true }, các tham số truy vấn có giá trị là null sẽ không xuất hiện trong URL được tạo ra. 
      // Điều này giúp làm cho URL sạch hơn và đơn giản hơn khi không có các tham số truy vấn không cần thiết.

      router.push(url)
  }
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        {name}
      </h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter