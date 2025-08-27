"use client";

import { ReactNode } from "react";
import { FaCalendarAlt } from "react-icons/fa";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

type ButtonProps2 = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button2: React.FC<ButtonProps2> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button2;

export const Button = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
};

export const ReserveButton = () => (
  <Button className="w-full bg-lime-50 hover:bg-lime-100 text-lime-900">
    <FaCalendarAlt className="mr-2 h-4 w-4" />
     Reserve Class
  </Button>
);

