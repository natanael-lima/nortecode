// components/TechCarousel.tsx
"use client";

import { FaReact, FaNodeJs, FaAngular, FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const icons = [
  { icon: <FaReact className="text-black dark:text-sky-100" />, name: "React" },
  { icon: <SiNextdotjs className="text-black dark:text-sky-100" />, name: "Next.js" },
  { icon: <FaNodeJs className="text-black dark:text-sky-100" />, name: "Node.js" },
  { icon: <FaAngular className="text-black dark:text-sky-100"/>, name: "Angular" },
  { icon: <FaHtml5 className="text-black dark:text-sky-100" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-black dark:text-sky-100"/>, name: "CSS3" },
  { icon: <SiTailwindcss className="text-black dark:text-sky-100"/>, name: "Tailwind" },
  { icon: <FaPython className="text-black dark:text-sky-100" />, name: "Python" },
  { icon: <FaJava className="text-black dark:text-sky-100"/>, name: "Java" },
  { icon: <SiMongodb className="text-black dark:text-sky-100"/>, name: "MongoDB" },
];

// duplicamos para efecto infinito
const duplicatedIcons = [...icons, ...icons];

export default function TechCarousel() {
  return (
   <div className="relative w-full overflow-hidden">
  {/* Fade Izquierdo */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-indigo-950 to-transparent z-10"></div>
  {/* Fade Derecho */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-indigo-950  to-transparent z-10"></div>

  <div className="flex gap-10 animate-scroll">
    {duplicatedIcons.map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center justify-center text-6xl min-w-[120px]"
      >
        {item.icon}
        <p className="text-sm mt-2 font-semibold">{item.name}</p>
      </div>
    ))}
  </div>
</div>


  );
}
