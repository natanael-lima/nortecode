// components/FeatureRow.tsx
"use client";

import { FaBolt, FaClock, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-sky-100" />,
    text: "Entrega de 1 a 3 semanas",
  },
  {
    icon: <FaDollarSign className="text-sky-100 " />,
    text: "Precios accesibles",
  },
  {
    icon: <FaClock className="text-sky-100" />,
    text: "Soporte rápido",
  },
  {
    icon: <FaShieldAlt className="text-sky-100" />,
    text: "Garantía de calidad",
  },
];

export default function FeatureRow() {
  return (
    <div className="flex items-center justify-center gap-6 w-full">
      {features.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          {/* Icono con borde circular */}
          <div className="p-2 border-1 border-sky-100/20 dark:border-indigo-100/20 rounded-lg">
            {item.icon}
          </div>
          {/* Texto */}
          <span className="text-base font-medium">{item.text}</span>

          {/* Línea divisoria, excepto en el último */}
          {idx < features.length - 1 && (
            <div className="h-6 w-px bg-gray-100/20  mx-3" />
          )}
        </div>
      ))}
    </div>
  );
}
