import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  color?: "blue" | "pink" | "green" | "yellow";
  className?: string;
};

export default function Badge({
  children,
  color = "blue",
  className = "",
}: BadgeProps) {
  const base =
    "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full shadow-sm";

  const colors = {
    blue: "bg-blue-100 text-blue-700",
    pink: "bg-pink-100 text-pink-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`${base} ${colors[color]} ${className}`}>
      {children}
    </span>
  );
}
