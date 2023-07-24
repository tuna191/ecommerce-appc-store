// import { forwardRef } from "react";: Dòng này sử dụng câu lệnh import để import phương thức forwardRef từ thư viện React. forwardRef cho phép chuyển ref từ các components cha xuống component con.

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}: Ở đây, chúng ta định nghĩa một interface ButtonProps dựa trên React.ButtonHTMLAttributes<HTMLButtonElement>. Bằng cách này, ButtonProps kế thừa tất cả các thuộc tính của thẻ <button> trong HTML. Bất kỳ thuộc tính nào không nằm trong danh sách này sẽ không được chấp nhận.

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
// const Button = forwardRef<HTMLButtonElement, ButtonProps>(...): Đây là việc sử dụng forwardRef để tạo component Button. Trong phần này, chúng ta xác định loại ref HTMLButtonElement và ButtonProps là hai tham số generics của forwardRef. Bên trong forwardRef, ta xác định hàm render của component.

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  // ({ className, disabled, children, type = "button", ...props }, ref) => {...}: Đây là hàm render của component Button. Hàm này nhận các props như className, disabled, children và type, cũng như ...props để hứng các props khác không được xác định trong ButtonProps. Đặc biệt, chúng ta nhận tham số ref, để sau này có thể truyền ref từ component cha xuống.

  ({ className, disabled, children, type = "button", ...props }, ref) => {
    // <button ref={ref}>{children}</button>: Đây là nội dung thẻ <button> trong JSX. Chúng ta chuyển ref vào button để forwardRef có thể quản lý ref của component.

    return (
      <button
        ref={ref}
        className={cn(
          `
          w-auto 
          rounded-full
        bg-black 
          border-transparent
          px-5
          ру-3
          disabled:cursor-not-allowed 
          disabled:opacity-50
        text-white 
          font-semibold 
          hover:opacity-75 
          transition
          `,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

// Button.displayName = "Button";: Đoạn này định nghĩa tên của component, để khi sử dụng DevTools của React, component được hiển thị với tên chính xác.

Button.displayName = "Button";

export default Button;
