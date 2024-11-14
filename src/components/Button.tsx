import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-purple-700 text-white rounded px-4 py-2 transition-colors hover:bg-purple-600 disabled:bg-gray-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
