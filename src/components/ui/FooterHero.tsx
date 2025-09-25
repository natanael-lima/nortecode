// components/FeatureRow.tsx
"use client";

import { FaBolt, FaClock, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-teal-100" />,
    text: "Entrega de 1 a 3 semanas",
  },
  {
    icon: <FaDollarSign className="text-teal-100 " />,
    text: "Precios accesibles",
  },
  {
    icon: <FaClock className="text-teal-100" />,
    text: "Soporte rápido",
  },
  {
    icon: <FaShieldAlt className="text-teal-100" />,
    text: "Garantía de calidad",
  },
];

export default function FeatureRow() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:flex sm:items-center sm:justify-center sm:gap-6 w-full">
      {features.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          {/* Icono con borde circular */}
          <div className="p-2 border border-teal-100/20 dark:border-teal-100/20 rounded-lg">
            {item.icon}
          </div>
          {/* Texto */}
          <span className="text-xs font-normal md:text-base">{item.text}</span>

          {/* Línea divisoria solo en pantallas grandes */}
          {idx < features.length - 1 && (
            <div className="hidden sm:block h-6 w-px bg-gray-100/20 mx-3" />
          )}
        </div>
      ))}
    </div>
  );
}

