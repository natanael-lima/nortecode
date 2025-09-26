import { 
  FaGlobe, 
  FaDesktop, 
  FaLaptop, 
  FaShoppingCart, 
  FaCreditCard, 
  FaCog, 
  FaFileAlt, 
  FaBolt, 
  FaWrench 
} from "react-icons/fa";

export const servicesList = [
  {
    title: "Landing Page",
    icon: FaGlobe,
    description: "Páginas de aterrizaje optimizadas para conversión. Diseños atractivos que convierten visitantes en clientes",
  },
  {
    title: "Aplicaciones Web",
    icon: FaDesktop,
    description: "Soluciones web modernas y escalables. Aplicaciones web responsivas con tecnología de vanguardia",
  },
  {
    title: "Aplicaciones de Escritorio",
    icon: FaLaptop,
    description: "Software nativo para Windows, Mac y Linux. Aplicaciones de escritorio potentes y multiplataforma",
  },
  {
    title: "E-Commerce",
    icon: FaShoppingCart,
    description: "Tiendas online completas y seguras. Plataformas de comercio electrónico con gestión integral",
  },
  {
    title: "POS (Punto de Venta)",
    icon: FaCreditCard,
    description: "Sistemas de punto de venta inteligentes. Soluciones POS modernas para tu negocio",
  },
  {
    title: "Sistemas de Gestión",
    icon: FaCog,
    description: "ERP y CRM personalizados para tu empresa. Sistemas de gestión empresarial a medida",
  },
  {
    title: "CMS & Blogs",
    icon: FaFileAlt,
    description: "Gestores de contenido fáciles de usar. Plataformas de contenido intuitivas y potentes",
  },
  {
    title: "Integraciones con APIs",
    icon: FaBolt,
    description: "Conecta tus sistemas y automatiza procesos. Integraciones seamless con servicios externos",
  },
  {
    title: "Soporte & Mantenimiento",
    icon: FaWrench,
    description: "Mantenimiento continuo y soporte técnico. Soporte 24/7 y mantenimiento preventivo",
  },
]

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}
export const projects: Project[] = [
    {
      id: 1,
      title: "Plataforma E-Commerce ",
      description: "Plataforma de compras en línea moderna con funciones avanzadas y experiencia de usuario perfecta.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      category: "E-Commerce",
      technologies: ["Spring", "Angular", "MySQL"],
      link: "#",
    },
    {
      id: 2,
      title: "Panel de Analisis",
      description: "Panel de inteligencia empresarial con visualización de datos.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      category: "Sistema de Gestion",
      technologies: ["Angular", "Nodejs","Express"],
      link: "#",
    },
    {
      id: 3,
      title: "Gestión Sanitaria",
      description: "Sistema completo de gestión sanitaria.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
      category: "Aplicacion Web",
      technologies: ["Angular", "Spring Boot","Bootstrap","Postgres"],
      link: "#",
    },
    {
      id: 4,
      title: "Plataforma de Redes Sociales",
      description: "Plataforma de redes sociales de próxima generación.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      category: "Aplicacion Web",
      technologies: ["Next.js", "GraphQL","Tailwind"],
      link: "#",
    },
    {
      id: 5,
      title: "Sistema de Gestión del Aprendizaje",
      description: "LMS integral para instituciones educativas.",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg",
      category: "Aplicacion Web",
      technologies: ["React", "Express","Tailwind","MongoDB"],
      link: "#",
    },
    {
      id: 6,
      title: "Portal Inmobiliario",
      description: "Plataforma inmobiliaria moderna con tours virtuales.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      category: "Landing Page",
      technologies: ["Nextjs", "Tailwindcss"],
      link: "#",
    },
    {
      id: 7,
      title: "Gestión de Inventario",
      description: "Sistema inteligente de seguimiento de inventario.",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
      category: "POS",
      technologies: ["React", "Django"],
      link: "#",
    },
    {
      id: 8,
      title: "Aplicación Gestion de Comida",
      description: "Solución completa de entrega de alimentos con seguimiento en tiempo real.",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg",
      category: "Aplicacion de Escritorio",
      technologies: ["Flutter", "Node.js"],
      link: "#",
    },
    {
      id: 9,
      title: "Aplicación de Actividad Física",
      description: "Comprehensive fitness application.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      category: "Landing Page",
      technologies: ["React Native", "Firebase"],
      link: "#",
    },
    {
      id: 10,
      title: "Plataforma de Viajes",
      description: "Complete travel booking solution.",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
      category: "CMS/Blog",
      technologies: ["Next.js", "Prisma"],
      link: "#",
    },
    {
      id: 11,
      title: "Sistema CRM",
      description: "Customer relationship management system.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      category: "Sistema de Gestion",
      technologies: ["Vue.js", "Ruby on Rails"],
      link: "#",
    },
    {
      id: 12,
      title: "Aplicación de Gestión de Eventos",
      description: "Complete event planning platform.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      category: "Sistema de Gestion",
      technologies: ["React", "Node.js"],
      link: "#",
    },
  ];